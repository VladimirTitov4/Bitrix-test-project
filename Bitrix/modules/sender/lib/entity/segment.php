<?php
/**
 * Bitrix Framework
 * @package bitrix
 * @subpackage sender
 * @copyright 2001-2012 Bitrix
 */
namespace Bitrix\Sender\Entity;

use Bitrix\Main\Application;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\Type\DateTime;
use Bitrix\Sender\GroupTable;
use Bitrix\Sender\GroupConnectorTable;
use Bitrix\Sender\Connector;
use Bitrix\Sender\Internals\Model\GroupCounterTable;

Loc::loadMessages(__FILE__);

class Segment extends Base
{
	const CODE_ALL = 'all';

	/** @var bool $isFilterOnly Is filter only. */
	protected $isFilterOnly = false;

	/**
	 * Get default segments.
	 *
	 * @return array
	 */
	public static function getDefaultIds()
	{
		$result = array();
		$id = self::getIdByCode(self::CODE_ALL);
		if ($id)
		{
			$result[] = $id;
		}

		return $result;
	}

	/**
	 * Get segment ID by code.
	 *
	 * @param string|string[] $code Code.
	 * @return integer|null
	 */
	public static function getIdByCode($code)
	{
		$row = self::getList(array(
			'select' => array('ID'),
			'filter' => array('=CODE' => $code),
			'limit' => 1,
			'cache' => array('ttl' => 36000)
		))->fetch();

		return $row ? $row['ID'] : null;
	}

	/**
	 * Get list.
	 *
	 * @param array $parameters Parameters.
	 * @return \Bitrix\Main\DB\Result
	 */
	public static function getList(array $parameters = array())
	{
		return GroupTable::getList($parameters);
	}

	/**
	 * Get default data.
	 *
	 * @return array
	 */
	protected function getDefaultData()
	{
		return array(
			'NAME' => '',
			'ENDPOINTS' => array(),
		);
	}

	/**
	 * Load data.
	 *
	 * @param integer $id ID.
	 * @return array|null
	 */
	protected function loadData($id)
	{
		$data = GroupTable::getRowById($id);
		if (!is_array($data))
		{
			return null;
		}

		$data['ENDPOINTS'] = array();
		$groupConnectorDb = GroupConnectorTable::getList(array(
			'filter'=>array(
				'=GROUP_ID'=> $id
			)
		));
		while($groupConnector = $groupConnectorDb->fetch())
		{
			if(empty($groupConnector['ENDPOINT']) || !is_array($groupConnector['ENDPOINT']))
			{
				continue;
			}

			$data['ENDPOINTS'][] = $groupConnector['ENDPOINT'];
		}

		return $data;
	}

	/**
	 * Save data.
	 *
	 * @param integer|null $id ID.
	 * @param array $data Data.
	 * @return integer|null
	 */
	protected function saveData($id = null, array $data)
	{
		$endpoints = $data['ENDPOINTS'];
		unset($data['ENDPOINTS']);

		if(!is_array($endpoints) || count($endpoints) == 0)
		{
			$this->addError(Loc::getMessage('SENDER_ENTITY_SEGMENT_ERROR_NO_FILTERS'));
			return $id;
		}

		$id = $this->saveByEntity(GroupTable::getEntity(), $id, $data);
		if ($this->hasErrors())
		{
			return $id;
		}

		$dataCounters = array();
		GroupConnectorTable::delete(array('GROUP_ID' => $id));
		foreach ($endpoints as $endpoint)
		{
			$connector = Connector\Manager::getConnector($endpoint);
			if (!$connector)
			{
				continue;
			}

			if ($this->isFilterOnly() && !($connector instanceof Connector\BaseFilter))
			{
				continue;
			}

			$connector->setFieldValues($endpoint['FIELDS']);
			$endpoint['FIELDS'] = $connector->getFieldValues();

			$groupConnector = array(
				'GROUP_ID' => $id,
				'NAME' => $connector->getName(),
				'ENDPOINT' => $endpoint,
				'ADDRESS_COUNT' => $connector->getDataCounter()->getSummary()
			);

			$connectorResultDb = GroupConnectorTable::add($groupConnector);
			if($connectorResultDb->isSuccess())
			{
				$dataCounters[] = $connector->getDataCounter();
			}
		}

		$this->updateAddressCounters($id, $dataCounters);

		return $id;
	}

	/**
	 * Is hidden.
	 */
	public function isHidden()
	{
		return $this->get('HIDDEN') === 'Y';
	}

	/**
	 * Is hidden.
	 */
	public function isSystem()
	{
		return $this->get('IS_SYSTEM') === 'Y';
	}

	/**
	 * Is save filters only.
	 *
	 * @return bool
	 */
	public function isFilterOnly()
	{
		return $this->isFilterOnly;
	}

	/**
	 * Set save filter only mode.
	 *
	 * @param bool $mode Mode.
	 * @return $this
	 */
	public function setFilterOnlyMode($mode = true)
	{
		$this->isFilterOnly = $mode;
		return $this;
	}

	/**
	 * Update segment address counters.
	 *
	 * @param integer $segmentId Segment ID.
	 * @param Connector\DataCounter[] $counters Counters.
	 * @return bool
	 */
	public static function updateAddressCounters($segmentId, array $counters)
	{
		if (!$segmentId)
		{
			return false;
		}

		$count = 0;
		$countByType = array();
		foreach ($counters as $dataCounter)
		{
			$count += $dataCounter->getSummary();
			$list = $dataCounter->getList();
			foreach ($list as $typeId => $typeCount)
			{
				if (!isset($countByType[$typeId]))
				{
					$countByType[$typeId] = 0;
				}

				$countByType[$typeId] += $typeCount;
			}
		}


		$result = GroupTable::update($segmentId, array('ADDRESS_COUNT' => $count));
		if (!$result->isSuccess())
		{
			return false;
		}

		GroupCounterTable::delete(array('GROUP_ID' => $segmentId));
		foreach ($countByType as $typeId => $typeCount)
		{
			if (!$typeCount)
			{
				continue;
			}

			GroupCounterTable::add(array(
				'GROUP_ID' => $segmentId,
				'TYPE_ID' => $typeId,
				'CNT' => $typeCount,
			));
		}

		return true;
	}

	/**
	 * Get segment address counter.
	 *
	 * @param integer $segmentId Segment ID.
	 * @return Connector\DataCounter
	 */
	public static function getAddressCounter($segmentId)
	{
		$data = self::getAddressCounters(array($segmentId));
		return new Connector\DataCounter(current($data) ?: array());
	}

	/**
	 * Get segment address counters.
	 *
	 * @param integer[] $list List of ID.
	 * @return array
	 */
	public static function getAddressCounters(array $list)
	{
		$data = array();
		$list = GroupCounterTable::getList(array(
			'select' => array('GROUP_ID', 'TYPE_ID', 'CNT'),
			'filter' => array('=GROUP_ID' => $list),
			'order' => array('GROUP_ID' => 'ASC')
		));
		foreach ($list as $row)
		{
			$data[$row['GROUP_ID']][$row['TYPE_ID']] = $row['CNT'];
		}
		return $data;
	}

	/**
	 * Update segment use counter.
	 *
	 * @param integer[] $list Segment ID list.
	 * @param bool $isInclude Update include counters.
	 * @return void
	 */
	public static function updateUseCounters(array $list, $isInclude = true)
	{
		if (count($list) === 0)
		{
			return;
		}

		$tableName = GroupTable::getTableName();
		$now = Application::getConnection()->getSqlHelper()->convertToDbDateTime(new DateTime());
		$ids = array();
		foreach ($list as $id)
		{
			if (!$id || !is_numeric($id))
			{
				continue;
			}

			$id = (int) $id;
			if (!$id)
			{
				continue;
			}

			$ids[] = $id;
		}
		$ids = implode(', ', $ids);
		$postfix = $isInclude ? '' : '_EXCLUDE';

		$sql = "UPDATE $tableName SET USE_COUNT$postfix = USE_COUNT$postfix + 1, DATE_USE$postfix = $now WHERE ID IN ($ids)";
		Application::getConnection()->query($sql);
	}

	/**
	 * Remove.
	 *
	 * @return bool
	 */
	public function remove()
	{
		return $this->removeByEntity(GroupTable::getEntity(), $this->getId());
	}

	/**
	 * Remove by letter ID.
	 *
	 * @param integer $id Letter ID.
	 * @return bool
	 */
	public static function removeById($id)
	{
		return static::create()->removeByEntity(GroupTable::getEntity(), $id);
	}
}