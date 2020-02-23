<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Наши салоны");
$APPLICATION->SetPageProperty("keywords", "веб, разработка, программирование");
$APPLICATION->IncludeComponent(
	"qsoft:stores.list", 
	"stores_full", 
	array(
		"COMPONENT_TEMPLATE" => "stores_full",
		"IBLOCK_TYPE" => "salons",
		"IBLOCK_ID" => "9",
		"STORES_COUNT" => "1",
		"CHECK_DATES" => "Y",
		"SHOW_MAP" => "N",
		"SORT_BY1" => "ACTIVE_FROM",
		"SORT_ORDER1" => "DESC",
		"FIELD_CODE" => array(
			0 => "NAME",
			1 => "PREVIEW_TEXT",
			2 => "PREVIEW_PICTURE",
			3 => "IBLOCK_TYPE_ID",
			4 => "IBLOCK_ID",
			5 => "",
		),
		"PROPERTY_CODE" => array(
			0 => "ADRESS",
			1 => "PHONE",
			2 => "WORK_HOURS",
			3 => "",
		),
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "3600",
		"ALL_STORES_URL" => "/company/stores/"
	),
	false
);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>