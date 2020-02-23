<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Loader,
    Bitrix\Iblock;

class ModelsOfTheWeek extends CBitrixComponent
{
    public function onPrepareComponentParams($arParams)
    {
        if (!isset($arParams["CACHE_TIME"]))
            $arParams[" CACHE_TIME"] = 3600;

        $arParams["IBLOCK_TYPE"] = trim($arParams["IBLOCK_TYPE"]);

        if (strlen($arParams["IBLOCK_TYPE"]) <= 0)
            $arParams["IBLOCK_TYPE"] = "products";

        $arParams["IBLOCK_ID"] = trim($arParams["IBLOCK_ID"]);

        $arParams["SORT_BY1"] = trim($arParams["SORT_BY1"]);

        if (strlen($arParams["SORT_BY1"]) <= 0) {
            $arParams["SORT_BY1"] = "RAND";
        }

        if (strlen($arParams["SORT_ORDER1"]) <= 0) {
            $arParams["SORT_BY1"] = "DESC";
        }

        $arParams["MODELS_COUNT"] = intval($arParams["MODELS_COUNT"]);

        if($arParams["MODELS_COUNT"] <= 0) {
            $arParams["MODELS_COUNT"] = 4;
        }

        return $arParams;
    }

    public function executeComponent()
    {
        if ($this->startResultCache()) {

            if (!Loader::includeModule("iblock")) {
                $this->abortResultCache();
                ShowError(GetMessage("IBLOCK_MODULE_NOT_INSTALLED"));
                return;
            }

            if (is_numeric($this->arParams["IBLOCK_ID"])) {
                $rsIBlock = CIBlock::GetList([], [
                    "ACTIVE" => "Y",
                    "ID" => $this->arParams["IBLOCK_ID"],
                ]);
            } else {
                $rsIBlock = CIBlock::GetList([], [
                    "ACTIVE" => "Y",
                    "CODE" => $this->arParams["IBLOCK_ID"],
                    "SITE_ID" => SITE_ID,
                ]);
            }

            $this->arResult = $rsIBlock->GetNext();
            if (!$this->arResult) {
                $this->abortResultCache();
                return;
            }

            $arSort = [
                $this->arParams["SORT_BY1"] => $this->arParams["SORT_ORDER1"],
            ];

            $arFilter = [
                "IBLOCK_ID" => $this->arResult["ID"],
                "ACTIVE" => "Y"
            ];

            $arSelect = [
                "ID",
                "IBLOCK_ID",
                "IBLOCK_SECTION_ID",
                "NAME",
                "PREVIEW_PICTURE",
                "PROPERTY_MODEL_WEEKS",
                "PROPERTY_NEW",
                "PROPERTY_SALE"
            ];

            if (!array_key_exists("ID", $arSort)) {
                $arSort["ID"] = "DESC";
            }

            if ($this->arParams["MODELS_COUNT"]) {
                $navParam = ["nTopCount" => $this->arParams["MODELS_COUNT"]];
            }

            $this->arResult["ITEMS"] = [];

            $rsElement = CIBlockElement::GetList($arSort, $arFilter, false, $navParam, $arSelect);

            while ($arItem = $rsElement->GetNext(true, false)) {
                $this->arResult["ITEMS"][] = $arItem;
            }

            $this->IncludeComponentTemplate();
        }
    }
}
