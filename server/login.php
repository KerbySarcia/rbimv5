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
  case "POST":
    $user = json_decode(file_get_contents('php://input'));
    $sql = "SELECT * FROM users_info WHERE username = :username";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $user->username);
    $stmt->execute();

    if($stmt->rowCount()) {
      $result = $stmt->fetch();

      if(password_verify($user->password, $result['password'])) {
          echo json_encode($result);
      }
    } 
    $stmt = null;
    break;
}
?>