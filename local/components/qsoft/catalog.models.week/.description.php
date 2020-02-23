<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

$arComponentDescription = [
    "NAME" => GetMessage("IBLOCK_MAIN_PAGE_TEMPLATE_NAME"),
    "DESCRIPTION" => GetMessage("IBLOCK_MAIN_PAGE_TEMPLATE_DESCRIPTION"),
    "CACHE_PATH" => "Y",
    "SORT" => 90,
    "PATH" => [
        "ID" => "content",
        "CHILD" => [
            "ID" => "catalog",
            "NAME" => GetMessage("T_IBLOCK_DESC_CATALOG"),
            "SORT" => 30
        ]
    ],
];