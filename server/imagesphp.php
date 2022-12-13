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
    $lastId = $lastRowFetch['id'];

    $get_last_row = $conn->query("SELECT * FROM individual_question_part_a WHERE id = $lastId");
    $last_row = $get_last_row->fetch();
    
    
    $photoString = $last_row['Q1_Surname'] . "-" . $lastRowFetch['id'] . "-photo." . strtolower(end(explode(".", $_FILES['photo']['name'])));
    $signatureString = $last_row['Q1_Surname'] . "-" . $lastRowFetch['id'] . "-signature." . strtolower(end(explode(".", $_FILES['signature']['name'])));
    $leftString = $last_row['Q1_Surname'] . "-" . $lastRowFetch['id'] . "-left." . strtolower(end(explode(".", $_FILES['leftThumbMark']['name'])));
    $rightString = $last_row['Q1_Surname'] . "-" . $lastRowFetch['id'] . "-right." . strtolower(end(explode(".", $_FILES['rightThumbMark']['name'])));
    
    //Insert value to individual_record_images
    $individualRecordimages= "INSERT INTO individual_record_images(id,Photo,Signature,Left_Thumb_Mark,Right_Thumb_Mark)
                              VALUES(:id,:Photo,:Signature,:Left_Thumb_Mark,:Right_Thumb_Mark)";
    $individualRecordimagesStatement=$conn->prepare($individualRecordimages);                       
    $individualRecordimagesStatement->bindParam(':id', $lastRowFetch['id']);
    $individualRecordimagesStatement->bindParam(':Photo',  $photoString);
    $individualRecordimagesStatement->bindParam(':Signature', $signatureString);
    $individualRecordimagesStatement->bindParam(':Left_Thumb_Mark', $leftString);
    $individualRecordimagesStatement->bindParam(':Right_Thumb_Mark', $rightString);
    $individualRecordimagesStatement->execute();

    // Move Files
        move_uploaded_file($_FILES["photo"]["tmp_name"], "../public/images-person/" .  $photoString);
        move_uploaded_file($_FILES["signature"]["tmp_name"], "../public/images-person/" . $signatureString);
        move_uploaded_file($_FILES["leftThumbMark"]["tmp_name"], "../public/images-person/" . $leftString);
        move_uploaded_file($_FILES["rightThumbMark"]["tmp_name"], "../public/images-person/" . $rightString);
    break;
}
?>