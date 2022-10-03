<?php

$mysql_configuration = [
    'host' => 'localhost',
    'user' => 'root',
    'password' => '',
    'database' => 'knowledge_city',
    'port' => 3306
];
$_SERVER['mysqli'] = new mysqli(...array_values($mysql_configuration));

if ($_SERVER['mysqli']->connect_error) {
    die("Connection failed: " . $_SERVER['mysqli']->connect_error);
}

function get_mysql_instance(): mysqli
{
    return $_SERVER['mysqli'];
}