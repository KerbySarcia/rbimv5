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
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $username = $user->username;
        $accountDeleteQuery = "DELETE FROM users_info WHERE username = :username";
        $accountDeleteStatement = $conn->prepare($accountDeleteQuery);
        $accountDeleteStatement->bindParam(':username', $username);
        $accountDeleteStatement->execute();
        break;
}

?>