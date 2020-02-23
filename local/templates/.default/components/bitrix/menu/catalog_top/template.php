<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
    <nav class="main_menu">
        <ul>

<?$previousLevel = 0;
foreach($arResult as $arItem):?>
	<?if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel):?>
		<?=str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"]));?>
	<?endif?>

	<?if ($arItem["IS_PARENT"]):?>
		<?if ($arItem["DEPTH_LEVEL"] == 1):?>
			<li class="submenu <?=$arItem["SELECTED"] ? 'current' : '' ?>">
                <span><?=$arItem["TEXT"]?></span>
                <div class="submenu_border">
                <ul>
		<?else:?>
			<li class="<?=$arItem["SELECTED"] ? 'current' : '' ?>"><a href="<?=$arItem["LINK"]?>"><span><?=$arItem["TEXT"]?></span></a>
				<ul>
		<?endif?>
	<?else:?>
		<?if ($arItem["PERMISSION"] > "D"):?>
			<?if ($arItem["DEPTH_LEVEL"] == 1):?>
                <? if ($arItem["SELECTED"]): ?>
				    <li class="current"><span><?=$arItem["TEXT"]?></span></li>
                <?else:?>
                    <li><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
                <?endif;?>
			<?else:?>
                <? if ($arItem["SELECTED"]): ?>
                    <li class="current"><span><?=$arItem["TEXT"]?></span></li>
                <?else:?>
                    <li><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
                <?endif;?>
			<?endif?>

		<?endif?>

	<?endif?>

	<?$previousLevel = $arItem["DEPTH_LEVEL"];?>

<?endforeach?>

<?if ($previousLevel > 1)://close last item tags?>
	<?=str_repeat("</ul></li>", ($previousLevel-1) );?>
<?endif?>

    </ul>
</nav>
<?endif?>