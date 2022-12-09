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
    $path = explode('/', $_SERVER['REQUEST_URI']);
    $updateId =  $path[4];

    $individualQuery = "SELECT * FROM individual_record WHERE id = $updateId";
    $individualStatement = $conn->prepare($individualQuery);
    $individualStatement->execute();
    $individualFetch = $individualStatement->fetchAll();

    $identificationQuery = "SELECT * FROM identification WHERE id = $updateId";
    $identificationStatement = $conn->prepare($identificationQuery);
    $identificationStatement->execute();
    $identificationFetch = $identificationStatement->fetchAll();

    $encodingQuery = "SELECT * FROM encoding_information WHERE id = $updateId";
    $encodingStatement = $conn->prepare($encodingQuery);
    $encodingStatement->execute();
    $encodingFetch = $encodingStatement->fetchAll();

    $individualImagesQuery = "SELECT * FROM individual_record_images WHERE id = $updateId";
    $individualImagesStatement = $conn->prepare($individualImagesQuery);
    $individualImagesStatement->execute();
    $individualImagesFetch = $individualImagesStatement->fetchAll();

    $interviewQuery = "SELECT * FROM interview_information WHERE id = $updateId";
    $interviewStatement = $conn->prepare($interviewQuery);
    $interviewStatement->execute();
    $interviewFetch = $interviewStatement->fetchAll();

    $questionPartAQuery = "SELECT * FROM individual_question_part_a WHERE id = $updateId";
    $questionPartAStatement = $conn->prepare($questionPartAQuery);
    $questionPartAStatement->execute();
    $questionPartAFetch = $questionPartAStatement->fetchAll();
    
    $questionPartBQuery = "SELECT * FROM individual_question_part_b WHERE id = $updateId";
    $questionPartBStatement = $conn->prepare($questionPartBQuery);
    $questionPartBStatement->execute();
    $questionPartBFetch = $questionPartBStatement->fetchAll();

    $questionPartCQuery = "SELECT * FROM individual_question_part_c WHERE id = $updateId";
    $questionPartCStatement = $conn->prepare($questionPartCQuery);
    $questionPartCStatement->execute();
    $questionPartCFetch = $questionPartCStatement->fetchAll();

    $questionPartDQuery = "SELECT * FROM individual_question_part_d WHERE id = $updateId";
    $questionPartDStatement = $conn->prepare($questionPartDQuery);
    $questionPartDStatement->execute();
    $questionPartDFetch = $questionPartDStatement->fetchAll();

    $data = (object)array('individual' => $individualFetch,
                          'identification' => $identificationFetch,
                          'encoding' => $encodingFetch,
                          'images' => $individualImagesFetch,
                          'interview' => $interviewFetch,
                          'questionPartA' => $questionPartAFetch,
                          'questionPartB' => $questionPartBFetch,
                          'questionPartC' => $questionPartCFetch,
                          'questionPartD' => $questionPartDFetch,
    );
    
    echo json_encode($data);
    break;
}
?>