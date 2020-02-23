<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<!DOCTYPE>
<!--[if IE 7]>    <html class="ie7"> <![endif]-->
<!--[if IE 8]>    <html class="ie8> <![endif]-->
<!--[if IE 9]>    <html class="ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html> <!--<![endif]-->
	<head>
		<?$APPLICATION->ShowHead();?>
		<title><?$APPLICATION->ShowTitle();?></title>
		<link href="<?=LOCAL_TEMPLATE_PATH?>/favicon.ico" rel="shortcut icon" type="image/x-icon" />
		<?php 
		use Bitrix\Main\Page\Asset;

		Asset::getInstance()->addCss(LOCAL_TEMPLATE_PATH . "/css/base.css");
		Asset::getInstance()->addCss(LOCAL_TEMPLATE_PATH . "/js/bxslider/jquery.bxslider.css");

		Asset::getInstance()->addJs(LOCAL_TEMPLATE_PATH . "/js/jquery-1.9.1.min.js");
		Asset::getInstance()->addJs(LOCAL_TEMPLATE_PATH . "/js/jquery.placeholder.js");
		Asset::getInstance()->addJs(LOCAL_TEMPLATE_PATH . "/js/bxslider/jquery.bxslider.js");
		Asset::getInstance()->addJs(LOCAL_TEMPLATE_PATH . "/js/default_script.js");

		Asset::getInstance()->addCss(LOCAL_TEMPLATE_PATH . "/js/jquery.ui.selectmenu/jquery.ui.core.css");
		Asset::getInstance()->addCss(LOCAL_TEMPLATE_PATH . "/js/jquery.ui.selectmenu/jquery.ui.theme.css");
		Asset::getInstance()->addCss(LOCAL_TEMPLATE_PATH . "/js/jquery.ui.selectmenu/jquery.ui.selectmenu.css");

		Asset::getInstance()->addJs(LOCAL_TEMPLATE_PATH . "/js/jquery.ui.selectmenu/jquery.ui.core.js");
		Asset::getInstance()->addJs(LOCAL_TEMPLATE_PATH . "/js/jquery.ui.selectmenu/jquery.ui.widget.js");
		Asset::getInstance()->addJs(LOCAL_TEMPLATE_PATH . "/js/jquery.ui.selectmenu/jquery.ui.position.js");
		Asset::getInstance()->addJs(LOCAL_TEMPLATE_PATH . "/js/jquery.ui.selectmenu/jquery.ui.selectmenu.js");

		?>
		<!--[if lt IE 9]>
			<script src="<?=LOCAL_TEMPLATE_PATH?>/js/html5shiv.js"></script>
		<![endif]-->
	</head>
	<body>
		<?$APPLICATION->ShowPanel();?>
		<div class="wrapper">
			<div class="base_layer"></div>
			<header class="header">
				<div class="width_960">
					<div class="item-logo">
						<span class="logo inline-block"></span>
					</div>
                    <?$APPLICATION->IncludeComponent(
                        "bitrix:system.auth.form",
                        "auth_form_header",
                        Array(
                            "FORGOT_PASSWORD_URL" => "",
                            "LOGIN_URL" => "/profile/personal/",
                            "LOGOUT_URL" => "?logout=yes",
                            "PROFILE_URL" => "/profile/",
                            "REGISTER_URL" => "/auth/",
                            "SHOW_ERRORS" => "N",
                            "AUTH_URL" => "/auth/?back_url="
                        )
                    );?>
					<div class="basket_block">
						<a href="#" class="basket_product_count inline-block">0</a>
						<a href="#" class="order_button pie">Оформить заказ</a>
					</div>
				</div>
			</header>
			<section class="fixed_block">
				<div class="width_960">
					<form name="search_form" class="search_form pie">
						<div class="search_form_wrapper">
							<input type="text" placeholder="Поиск по сайту"/>
							<input type="submit" value=""/>
						</div>
					</form>
                    <?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"catalog_top", 
	array(
		"ALLOW_MULTI_SELECT" => "N",
		"CHILD_MENU_TYPE" => "left",
		"COMPONENT_TEMPLATE" => "catalog_top",
		"DELAY" => "N",
		"MAX_LEVEL" => "2",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MENU_CACHE_TIME" => "3600",
		"MENU_CACHE_TYPE" => "A",
		"MENU_CACHE_USE_GROUPS" => "N",
		"ROOT_MENU_TYPE" => "top",
		"USE_EXT" => "Y"
	),
	false
);?>
				</div>
			</section>
			<section class="content">
				<div class="work_area width_960">