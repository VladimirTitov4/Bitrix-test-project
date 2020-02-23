<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

</section>
<hr class="bottom_line"/>
</div>

</section>

<div class="d_footer width_960"></div>
<div class="clear"></div>
</div>
<footer class="footer width_960">
    <section class="float_inner">
        <?$APPLICATION->IncludeComponent(
            "qsoft:stores.list",
            "stores_short",
            array(
                "COMPONENT_TEMPLATE" => "stores_short",
                "IBLOCK_TYPE" => "salons",
                "IBLOCK_ID" => "9",
                "STORES_COUNT" => "2",
                "CHECK_DATES" => "Y",
                "SORT_BY1" => "RAND",
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
        <section class="info_block left_block_shadow">
            <h2><?=GetMessage('CFT_INFO')?></h2>
            <?$APPLICATION->IncludeComponent("bitrix:menu", "menu_footer", Array(
                "ALLOW_MULTI_SELECT" => "N",	// Разрешить несколько активных пунктов одновременно
                "CHILD_MENU_TYPE" => "left",	// Тип меню для остальных уровней
                "DELAY" => "N",	// Откладывать выполнение шаблона меню
                "MAX_LEVEL" => "1",	// Уровень вложенности меню
                "MENU_CACHE_GET_VARS" => array(	// Значимые переменные запроса
                    0 => "",
                ),
                "MENU_CACHE_TIME" => "3600",	// Время кеширования (сек.)
                "MENU_CACHE_TYPE" => "A",	// Тип кеширования
                "MENU_CACHE_USE_GROUPS" => "Y",	// Учитывать права доступа
                "ROOT_MENU_TYPE" => "bottom",	// Тип меню для первого уровня
                "USE_EXT" => "N",	// Подключать файлы с именами вида .тип_меню.menu_ext.php
            ),
                false
            );?>
        </section>
    </section>
    <div class="footer_inner">
        <a href="http://www.qsoft.ru" target="_blank" class="qsoft grey inline-block">Сделано в</a>
        <div class="copy">&copy; 2013 Рога &amp; Сила. Продажа автомобилей.</div>
    </div>
</footer>
</body>
</html>