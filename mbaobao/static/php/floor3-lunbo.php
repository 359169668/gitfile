<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/10/20 0020
 * Time: 下午 7:24
 */
header('Access-Control-Allow-Origin: *');

$arr = file_get_contents("../json/floor3-lunbo.json");

echo $arr;