<?php

header('Access-Control-Allow-Origin: *');

$arr = file_get_contents("../json/list-detail.json");

echo $arr;

?>