<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>

<nav class="menu_footer grey">
	<ul>
		<?foreach($arResult as $arItem):?>

			<?if($arItem['PARAMS']['my_option'] == 'personal_color'): ?>
			    <li><a class="personal_color" href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
			<? else: ?>
			    <li><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
			<? endif;?>
			
		<?endforeach?>
	</ul>
</nav>
<?endif?>

