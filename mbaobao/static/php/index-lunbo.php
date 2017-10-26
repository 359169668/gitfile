<?php


header('Access-Control-Allow-Origin: *');

$arr = file_get_contents("../json/index-lunbo1.json");

echo $arr;