<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

AddEventHandler("main", "OnAfterUserAuthorize", function ($arUser) {
    $currTime = $arUser['user_fields']['LAST_LOGIN'];
    $corrTime = date("Y.d.m, H:i:s", strtotime($currTime));

    $siteID = '';
    $arEventFields= [
        "EMAIL" => $arUser['user_fields']['EMAIL'],
        "LOGIN" => $arUser['user_fields']['LOGIN'],
        "LAST_LOGIN" => $corrTime,
        $siteID => $arUser['user_fields']['LID']
    ];

    CEvent::Send("USER_AUTH", $arEventFields[$siteID], $arEventFields, "N");
});
