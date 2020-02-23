<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
global $USER;
?>
<? if(!$USER->IsAuthorized()): ?>

    <nav class="top_menu grey inline-block authorize">
        <a href="<?= $arResult['AUTH_REGISTER_URL'] ?>" class="register"><?=GetMessage("REGISTRATION")?></a>
        <a href="<?=$arParams["REGISTER_URL"] . $arResult["BACKURL"]?>" class="auth"><?=GetMessage("AUTH")?></a>
    </nav>

<? else: ?>

    <nav class="top_menu grey inline-block authorize">
        <p>
            <?=GetMessage("WELCOME")?><b><a href="<?= $arParams['LOGIN_URL'] ?>"><?= $arResult['USER_NAME'] ?>! </a></b>
            <a href="<?= $arParams['PROFILE_URL'] ?>"><?=GetMessage("PERSONAL_ROOM")?></a>
            <a href="?logout=yes"><?=GetMessage("EXIT")?></a>
        </p>
    </nav>

<? endif; ?>

