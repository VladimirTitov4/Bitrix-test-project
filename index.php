<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("РОГА&amp;СИЛА - Главная");
?>

<?$APPLICATION->IncludeComponent(
    "qsoft:main.banner",
    "",
    Array(
        "BS_ARROW_NAV" => "Y",
        "BS_BULLET_NAV" => "Y",
        "BS_CYCLING" => "N",
        "BS_EFFECT" => "fade",
        "BS_HIDE_FOR_PHONES" => "N",
        "BS_HIDE_FOR_TABLETS" => "N",
        "BS_KEYBOARD" => "Y",
        "BS_WRAP" => "Y",
        "CACHE_TIME" => "0",
        "CACHE_TYPE" => "A",
        "COMPONENT_TEMPLATE" => "bootstrap",
        "DEFAULT_TEMPLATE" => "-",
        "NOINDEX" => "N",
        "QUANTITY" => "3",
        "TYPE" => "QSOFT"
    )
);?><br>

<h2 class="push_right">Модели недели</h2>
 <section class="product_line">
     <?$APPLICATION->IncludeComponent(
	"qsoft:catalog.models.week", 
	"models_main", 
	array(
		"COMPONENT_TEMPLATE" => "models_main",
		"IBLOCK_TYPE" => "products",
		"IBLOCK_ID" => "10",
		"STORES_COUNT" => "4",
		"CHECK_DATES" => "Y",
		"SORT_BY1" => "DESC",
		"SORT_ORDER1" => "DESC",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "3600",
		"ALL_STORES_URL" => ""
	),
	false
);?>

</section>

<?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"news_list_main", 
	[
		"ACTIVE_DATE_FORMAT" => "j M Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"COMPONENT_TEMPLATE" => "news_list_main",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_DATE" => "Y",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(
			0 => "NAME",
			1 => "PREVIEW_TEXT",
			2 => "PREVIEW_PICTURE",
			3 => "DATE_ACTIVE_FROM",
			4 => "",
		),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "1",
		"IBLOCK_TYPE" => "news",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "Y",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "3",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "Новости",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "150",
		"PROPERTY_CODE" => array(
			0 => "",
			1 => "",
		),
		"SET_BROWSER_TITLE" => "N",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "N",
		"SHOW_404" => "N",
		"SORT_BY1" => "ACTIVE_FROM",
		"SORT_BY2" => "SORT",
		"SORT_ORDER1" => "DESC",
		"SORT_ORDER2" => "ASC",
		"STRICT_SECTION_CHECK" => "N"
	],
	false
);?>

 <?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>