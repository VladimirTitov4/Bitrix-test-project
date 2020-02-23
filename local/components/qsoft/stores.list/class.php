<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Main\Loader,
    Bitrix\Iblock;

class Stores extends CBitrixComponent
{
    public function onPrepareComponentParams($arParams)
    {
        if (!isset($arParams["CACHE_TIME"]))
            $arParams[" CACHE_TIME"] = 3600;

        $arParams["IBLOCK_TYPE"] = trim($arParams["IBLOCK_TYPE"]);

        if (strlen($arParams["IBLOCK_TYPE"]) <= 0)
            $arParams["IBLOCK_TYPE"] = "salons";

        $arParams["IBLOCK_ID"] = trim($arParams["IBLOCK_ID"]);

        $arParams["SORT_BY1"] = trim($arParams["SORT_BY1"]);

        if (strlen($arParams["SORT_BY1"]) <= 0)
            $arParams["SORT_BY1"] = "RAND";

        if (strlen($arParams["SORT_ORDER1"]) <= 0)
            $arParams["SORT_BY1"] = "DESC";

        $arParams["CHECK_DATES"] = $arParams["CHECK_DATES"] != "N";

        $arParams["ALL_STORES_URL"] = trim($arParams["ALL_STORES_URL"]);

        $arParams["STORES_COUNT"] = intval($arParams["STORES_COUNT"]);

        if($arParams["STORES_COUNT"] <= 0) {
            $arParams["STORES_COUNT"] = 2;
        }

        return $arParams;
    }

    public function executeComponent()
    {
        global $USER;
        global $APPLICATION;

        $navParam = false;

        if ($this->arParams["STORES_COUNT"]) {
            $navParam = [
                "nPageSize" => 2,
            ];
        }

        $arNavigation = CDBResult::GetNavParams($navParam);

        if ($this->startResultCache(false, $arNavigation)) {

            if (!Loader::includeModule("iblock")) {
                $this->abortResultCache();
                ShowError(GetMessage("IBLOCK_MODULE_NOT_INSTALLED"));
                return;
            }

            $arSort = [
                $this->arParams["SORT_BY1"] => $this->arParams["SORT_ORDER1"],
            ];

            if (!array_key_exists("ID", $arSort))
                $arSort["ID"] = "DESC";

            $arFilter = [
                "IBLOCK_ID" => $this->arParams["IBLOCK_ID"],
                "ACTIVE" => "Y",
            ];

            $arSelect = [
                "ID",
                "IBLOCK_ID",
                "IBLOCK_SECTION_ID",
                "NAME",
                "ACTIVE_FROM",
                "PREVIEW_TEXT",
                "PREVIEW_PICTURE",
                "PROPERTY_WORK_HOURS",
                "PROPERTY_ADRESS",
                "PROPERTY_PHONE",
            ];

            if ($this->arParams["SHOW_MAP"] === 'Y') {
                $arSelect[] = "PROPERTY_MAP";
            }

            $navComponentObject = null;

            $this->arResult["ITEMS"] = [];

            $rsElement = CIBlockElement::GetList($arSort, $arFilter, false, $navParam, $arSelect);

            $this->arResult["NAV_STRING"] = $rsElement->GetPageNavStringEx(
                $navComponentObject,
                '',
                'myTemplate',
                'Y',
                $this
            );

            $imageIdArr = [];

            while ($arItem = $rsElement->GetNext(true, false)) {
                $this->arResult["ITEMS"][] = $arItem;

                if ($arItem["PROPERTY_MAP_VALUE"]) {
                    $onMap = explode(',', $arItem["PROPERTY_MAP_VALUE"]);
                    $mapLAT = $onMap[0];
                    $mapLON = $onMap[1];
                    $this->arResult['arPlacemarks'][] = [
                        "LAT" => $mapLAT,
                        "LON" => $mapLON,
                        "TEXT" => $arItem["PROPERTY_ADRESS_VALUE"],
                    ];
                }

                $imageIdArr[] = $arItem['PREVIEW_PICTURE'];
            }

            if (isset($imageIdArr) > 0) {
                $imageIdStr = implode(',', $imageIdArr);
                $res = CFile::GetList(["ID" => "ASC"], ["@ID" => $imageIdStr]);

                while ($myElement = $res->GetNext(true, false)) {
                    if ($myElement["ORIGINAL_NAME"]) {
                        $this->arResult["IMAGE_URL"][$myElement["ID"]] = CFile::GetFileSRC($myElement);
                    }
                }

                for ($i = 0; $i < count($this->arResult["ITEMS"]); $i++) {
                    if (!is_null($this->arResult["ITEMS"][$i]['PREVIEW_PICTURE'])) {
                        $this->arResult["ITEMS"][$i]["PREVIEW_IMAGE_URL"] = $this->arResult["IMAGE_URL"][$this->arResult["ITEMS"][$i]["PREVIEW_PICTURE"]];
                    } else {
                        $this->arResult["ITEMS"][$i]["PREVIEW_IMAGE_URL"] = LOCAL_TEMPLATE_PATH . '/images/no-image.jpg';
                    }
                }
            }

            $this->setResultCacheKeys([
                "arPlacemarks",
                "NAV_STRING"
            ]);

            $this->IncludeComponentTemplate();
        }
    }
}
