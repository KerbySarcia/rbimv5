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
switch($method){
    case 'POST':

    // Gets the last id and use it as foreign key
    $lastRowId = "SELECT id FROM individual_record ORDER BY id DESC LIMIT 1";
    $lastRowIdExe = $conn->prepare($lastRowId);
    $lastRowIdExe->execute();
    $lastRowFetch = $lastRowIdExe->fetch();

    //Insert value to individual_record_images
    $individualRecordimages= "INSERT INTO individual_record_images(id,Photo,Signature,Left_Thumb_Mark,Right_Thumb_Mark)
                              VALUES(:id,:Photo,:Signature,:Left_Thumb_Mark,:Right_Thumb_Mark)";
    $individualRecordimagesStatement=$conn->prepare($individualRecordimages);                         
    $individualRecordimagesStatement->bindParam(':id', $lastRowFetch['id']);
    $individualRecordimagesStatement->bindParam(':Photo',$_FILES['photo']['name']);
    $individualRecordimagesStatement->bindParam(':Signature',$_FILES['signature']['name']);
    $individualRecordimagesStatement->bindParam(':Left_Thumb_Mark',$_FILES['leftThumbMark']['name']);
    $individualRecordimagesStatement->bindParam(':Right_Thumb_Mark',$_FILES['rightThumbMark']['name']);
    $individualRecordimagesStatement->execute();

    // Move Files
        move_uploaded_file($_FILES["photo"]["tmp_name"], "../public/images-person/" . $_FILES["photo"]["name"]);
        move_uploaded_file($_FILES["signature"]["tmp_name"], "../public/images-person/" . $_FILES["signature"]["name"]);
        move_uploaded_file($_FILES["leftThumbMark"]["tmp_name"], "../public/images-person/" . $_FILES["leftThumbMark"]["name"]);
        move_uploaded_file($_FILES["rightThumbMark"]["tmp_name"], "../public/images-person/" . $_FILES["rightThumbMark"]["name"]);
    break;
}
?>