<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DB_Connect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
  case "GET":

    $Individual = $conn->query("SELECT COUNT(id) AS count FROM individual_record");
    $getIndividual = $Individual->fetch();

    $Household = $conn->query("SELECT COUNT(num) AS count
                               FROM household_question_part_a");
    $getHousehold = $Household->fetchAll();

    echo json_encode((object) array('individual'=>$getIndividual, 'household'=>$getHousehold[0]));

    break;
}
?>