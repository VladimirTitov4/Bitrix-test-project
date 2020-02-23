<?php
define('LOCAL_TEMPLATE_PATH', '/local/templates/.default');
define('NO_PICTURE', '/local/templates/.default/images/no-image.jpg');

if (file_exists($_SERVER['DOCUMENT_ROOT']."/local/php_interface/include/event_handlers.php")) {
    require_once($_SERVER['DOCUMENT_ROOT'] . "/local/php_interface/include/event_handlers.php");
}