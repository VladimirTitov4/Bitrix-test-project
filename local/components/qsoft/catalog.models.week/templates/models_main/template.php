<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<? var_dump($arResult) ?>

<? if(!empty($arResult)): ?>
<figure class="product_item">
    <div class="product_item_pict">
        <a href="#">
            <img alt="BMW X3 2.0d" src="<?=LOCAL_TEMPLATE_PATH?>/images/test_top_week_1.png"
                 title="BMW X3 2.0d"> </a>
    </div>
    <figcaption>
        <h3><a href="#">BMW X3 2.0d</a></h3>
        <span class="product_item_price dark_grey old_price">3 230 000 руб.</span>
        <p class="product_item_price dark_grey">
            2 230 000 руб.
        </p>
        <a class="buy_button inverse inline-block pie" href="#">В корзину</a>
    </figcaption>
</figure>
<? endif; ?>
