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

      $last_row_query = $conn->query("SELECT * FROM individual_question_part_a WHERE id = $updateId");
      $last_row = $last_row_query->fetch();


      if(isset($_FILES["photo"])){
        unlink("../public/images-person/$photo");
        $photoString = $last_row['Q1_Surname'] . "-" . $updateId . "-photo." . strtolower(end(explode(".", $_FILES['photo']['name'])));
        $updatePhotoQuery = "UPDATE individual_record_images
                          SET Photo = :photo
                          WHERE id = :id";
        $updatePhotoStatement = $conn->prepare($updatePhotoQuery);
        $updatePhotoStatement->bindParam(":photo", $photoString);
        $updatePhotoStatement->bindParam(":id", $updateId);
        $updatePhotoStatement->execute();
        move_uploaded_file($_FILES["photo"]["tmp_name"], "../public/images-person/" . $photoString);
      }

      if(isset($_FILES["signature"])){
        unlink("../public/images-person/$signature");
        $signatureString = $last_row['Q1_Surname'] . "-" . $updateId . "-signature." . strtolower(end(explode(".", $_FILES['signature']['name'])));
        $updateSignatureQuery = "UPDATE individual_record_images
                          SET Signature = :signature
                          WHERE id = :id";
        $updateSignatureStatement = $conn->prepare($updateSignatureQuery);
        $updateSignatureStatement->bindParam(":signature", $signatureString);
        $updateSignatureStatement->bindParam(":id", $updateId);
        $updateSignatureStatement->execute();
        move_uploaded_file($_FILES["signature"]["tmp_name"], "../public/images-person/" . $signatureString);
      }

      if(isset($_FILES["leftThumbMark"])){
        unlink("../public/images-person/$leftThumb");
        $leftString = $last_row['Q1_Surname'] . "-" . $updateId . "-left." . strtolower(end(explode(".", $_FILES['leftThumbMark']['name'])));
        $updateLeftQuery = "UPDATE individual_record_images
                          SET Left_Thumb_Mark = :leftThumbMark
                          WHERE id = :id";
        $updateLeftStatement = $conn->prepare($updateLeftQuery);
        $updateLeftStatement->bindParam(":leftThumbMark", $leftString);
        $updateLeftStatement->bindParam(":id", $updateId);
        $updateLeftStatement->execute();
        move_uploaded_file($_FILES["leftThumbMark"]["tmp_name"], "../public/images-person/" . $leftString);
      }

      if(isset($_FILES["rightThumbMark"])){
        unlink("../public/images-person/$rightThumb");
        $rightString = $last_row['Q1_Surname'] . "-" . $updateId . "-right." . strtolower(end(explode(".", $_FILES['rightThumbMark']['name'])));
        $updateRightQuery = "UPDATE individual_record_images
                          SET Right_Thumb_Mark = :rightThumbMark
                          WHERE id = :id";
        $updateRightStatement = $conn->prepare($updateRightQuery);
        $updateRightStatement->bindParam(":rightThumbMark", $rightString);
        $updateRightStatement->bindParam(":id", $updateId);
        $updateRightStatement->execute();
        move_uploaded_file($_FILES["rightThumbMark"]["tmp_name"], "../public/images-person/" . $rightString);
      }
     
    break;
}
?>