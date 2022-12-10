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

    $path = explode('/', $_SERVER['REQUEST_URI']);
    $updateId =  $path[4];

    // Delete Images from localhost
      $getImagesQuery = "SELECT * FROM individual_record_images WHERE id = :id";
      $getImagesStatement = $conn->prepare($getImagesQuery);
      $getImagesStatement->bindParam(":id", $updateId);
      $getImagesStatement->execute();
      $images = $getImagesStatement->fetch();

      $photo = $images["Photo"];
      $signature = $images["Signature"];
      $leftThumb = $images["Left_Thumb_Mark"];
      $rightThumb = $images["Right_Thumb_Mark"];

      if(isset($_FILES["photo"])){
        unlink("../public/images-person/$photo");
        $updatePhotoQuery = "UPDATE individual_record_images
                          SET Photo = :photo
                          WHERE id = :id";
        $updatePhotoStatement = $conn->prepare($updatePhotoQuery);
        $updatePhotoStatement->bindParam(":photo", $_FILES["photo"]["name"]);
        $updatePhotoStatement->bindParam(":id", $updateId);
        $updatePhotoStatement->execute();
        move_uploaded_file($_FILES["photo"]["tmp_name"], "../public/images-person/" . $_FILES["photo"]["name"]);
      }

      if(isset($_FILES["signature"])){
        unlink("../public/images-person/$signature");
        $updateSignatureQuery = "UPDATE individual_record_images
                          SET Signature = :signature
                          WHERE id = :id";
        $updateSignatureStatement = $conn->prepare($updateSignatureQuery);
        $updateSignatureStatement->bindParam(":signature", $_FILES["signature"]["name"]);
        $updateSignatureStatement->bindParam(":id", $updateId);
        $updateSignatureStatement->execute();
        move_uploaded_file($_FILES["signature"]["tmp_name"], "../public/images-person/" . $_FILES["signature"]["name"]);
      }

      if(isset($_FILES["leftThumbMark"])){
        unlink("../public/images-person/$leftThumb");
        $updateLeftQuery = "UPDATE individual_record_images
                          SET Left_Thumb_Mark = :leftThumbMark
                          WHERE id = :id";
        $updateLeftStatement = $conn->prepare($updateLeftQuery);
        $updateLeftStatement->bindParam(":leftThumbMark", $_FILES["leftThumbMark"]["name"]);
        $updateLeftStatement->bindParam(":id", $updateId);
        $updateLeftStatement->execute();
        move_uploaded_file($_FILES["leftThumbMark"]["tmp_name"], "../public/images-person/" . $_FILES["leftThumbMark"]["name"]);
      }

      if(isset($_FILES["rightThumbMark"])){
        unlink("../public/images-person/$rightThumb");
        $updateRightQuery = "UPDATE individual_record_images
                          SET Right_Thumb_Mark = :rightThumbMark
                          WHERE id = :id";
        $updateRightStatement = $conn->prepare($updateRightQuery);
        $updateRightStatement->bindParam(":rightThumbMark", $_FILES["rightThumbMark"]["name"]);
        $updateRightStatement->bindParam(":id", $updateId);
        $updateRightStatement->execute();
        move_uploaded_file($_FILES["rightThumbMark"]["tmp_name"], "../public/images-person/" . $_FILES["rightThumbMark"]["name"]);
      }
     
    break;
}
?>