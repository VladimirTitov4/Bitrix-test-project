<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<? if(!empty($arResult)): ?>
    <section class="shops_block">
        <div>
            <? foreach ($arResult['ITEMS'] as $arItem): ?>
                <?
                $arButtons = CIBlock::GetPanelButtons(
                    $arItem["IBLOCK_ID"],
                    $arItem["ID"],
                    0,
                    ["SECTION_BUTTONS"=>false, "SESSID"=>false]
                );

                $arItem["ADD_LINK"] = $arButtons["edit"]["add_element"]["ACTION_URL"];
                $arItem["EDIT_LINK"] = $arButtons["edit"]["edit_element"]["ACTION_URL"];
                $arItem["DELETE_LINK"] = $arButtons["edit"]["delete_element"]["ACTION_URL"];

                $arItem["ADD_LINK_TEXT"] = $arButtons["edit"]["add_element"]["TEXT"];
                $arItem["EDIT_LINK_TEXT"] = $arButtons["edit"]["edit_element"]["TEXT"];
                $arItem["DELETE_LINK_TEXT"] = $arButtons["edit"]["delete_element"]["TEXT"];

                $this->AddEditAction($arItem['ID'], $arItem['ADD_LINK'], $arItem["ADD_LINK_TEXT"]);
                $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], $arItem["EDIT_LINK_TEXT"]);
                $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], $arItem["DELETE_LINK_TEXT"], ["CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')]);
                ?>
                <figure class="shops_block_item shops_block" id="<?=$this->GetEditAreaId($arItem['ID']) ?>">
                    <a href=""><img src="<?= $arItem["PREVIEW_IMAGE_URL"] ?>" alt="" title="" /></a>
                    <figcaption class="shops_block_item_description">
                        <h3 class="shops_block_item_name"><?= $arItem['NAME'] ?></h3>
                        <p class="dark_grey"><?= $arItem['PROPERTY_ADRESS_VALUE'] ?></p>
                        <p class="black"><?= $arItem['PROPERTY_PHONE_VALUE'] ?></p>
                        <p><?=GetMessage('WORK_HOURS')?><br/><?= $arItem['PROPERTY_WORK_HOURS_VALUE'] ?></p>
                    </figcaption>
                </figure>

            <? endforeach; ?>
        </div>
    </section>
    <div class="clear"></div>

    <? echo $arResult['NAV_STRING'] ?>
<? endif; ?>