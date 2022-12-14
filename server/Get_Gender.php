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

    $getGenderIndividual = $conn->query("SELECT Q3, COUNT(id) AS count
                                    FROM individual_question_part_a
                                    GROUP BY Q3");
    $genderIndividual = $getGenderIndividual->fetchAll();

    $getGenderHousehold = $conn->query("SELECT Q3, COUNT(id) AS count
                                    FROM household_question_part_a
                                    GROUP BY Q3");
    $genderHousehold = $getGenderHousehold->fetchAll();
    
    $indiFemale = $genderIndividual[0];
    $indiMale = $genderIndividual[1];
    $householdFemale = $genderHousehold[0];
    $householdMale = $genderHousehold[1];
    
    $female = $indiFemale['count'] + $householdFemale['count'];
    $male = $indiMale['count'] + $householdMale['count'];

    echo json_encode((object) array('female'=>$female, 'male'=>$male));

    break;
}
?>