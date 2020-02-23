<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<? $frame = $this->createFrame()->begin(""); ?>

<? if(!empty($arResult)): ?>

    <div class="slider">
        <ul class="bxslider">
            <? foreach ($arResult['BANNERS'] as $item): ?>
            <li>
                <div class="banner">
                    <?= $item ?>
                </div>
            </li>
            <? endforeach; ?>
        </ul>
    </div>

<? endif; ?>

<? $frame->end(); ?>
