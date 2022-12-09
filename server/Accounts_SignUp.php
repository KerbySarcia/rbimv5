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
        print_r($user);
        $id = $user->id;
        $username = $user->username;
        $password = $user->password;
        $access_lvl = $user->access_lvl;
        $passHash = password_hash($password, PASSWORD_DEFAULT);
        
        $signupQuery = "INSERT INTO users_info(id, username, password, access_lvl) VALUES (null, :username, :password, :access_lvl)";
        $signupStatement = $conn->prepare($signupQuery);
        $signupStatement->bindParam(':username', $username);
        $signupStatement->bindParam(':password', $passHash);
        $signupStatement->bindParam(':access_lvl', $access_lvl);
        $signupStatement->execute();
        break;
}

?>