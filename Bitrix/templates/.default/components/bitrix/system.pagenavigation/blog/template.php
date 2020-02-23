<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<nav class="pagination" role="navigation" aria-label="pagination">
      <a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]-1)?>" class="pagination-previous" disabled>Предыдущая страница</a>
      <a class="pagination-next">Следующая страница</a>
</nav>