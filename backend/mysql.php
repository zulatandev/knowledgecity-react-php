<?php

$mysqlConfiguration = [
    'host' => 'localhost',
    'user' => 'root',
    'password' => '',
    'database' => 'knowledge_city',
    'port' => 3306
];
$_SERVER['mysqli'] = new mysqli(...array_values($mysqlConfiguration));

if ($_SERVER['mysqli']->connect_error) {
    die("Connection failed: " . $_SERVER['mysqli']->connect_error);
}

function getMysqlInstance(): mysqli
{
    return $_SERVER['mysqli'];
}