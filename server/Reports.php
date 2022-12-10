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
    $individualRecordQuery = "SELECT * from individual_record";
    $householdRecordQuery = "SELECT * from household_record";
    $stmt = $conn->prepare($individualRecordQuery);
    $stmt->execute();
    $individualRecord = $stmt->fetchAll();
    $householdRecordStatement = $conn->prepare($householdRecordQuery);
    $householdRecordStatement->execute();
    $householdRecord = $householdRecordStatement->fetchAll();
    echo json_encode(array(...$individualRecord,...$householdRecord));
    break;
  case "DELETE":
    $deleteQuery = "";
    $path = explode('/', $_SERVER['REQUEST_URI']);
    $deleteId =  $path[4];
    $individualOrHousehold =  $path[5];
    if($individualOrHousehold === "individual-record-delete")
    {
      // Delete Images from localhost
      $getImagesQuery = "SELECT * FROM individual_record_images WHERE id = :id";
      $getImagesStatement = $conn->prepare($getImagesQuery);
      $getImagesStatement->bindParam(":id", $deleteId);
      $getImagesStatement->execute();
      $images = $getImagesStatement->fetch();

      $photo = $images["Photo"];
      $signature = $images["Signature"];
      $leftThumb = $images["Left_Thumb_Mark"];
      $rightThumb = $images["Right_Thumb_Mark"];

      unlink("../public/images-person/$photo");
      unlink("../public/images-person/$signature");
      unlink("../public/images-person/$leftThumb");
      unlink("../public/images-person/$rightThumb");


      $deleteQuery = "DELETE FROM individual_record WHERE id = :id";
    } else $deleteQuery = "DELETE FROM household_record WHERE id = :id";
    
    // Prepare and Execute
    $deleteStatement = $conn->prepare($deleteQuery);
    $deleteStatement->bindParam(":id", $deleteId);
    $deleteStatement->execute();
    break;
}
?>