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
    case 'GET':
        $accountQuery = "SELECT * FROM users_info";
        $accountStatement = $conn->prepare($accountQuery);
        $accountStatement->execute();
        $users = $accountStatement->fetchAll();
        echo json_encode($users);
        break;

    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $id = $user->id;
        $username = $user->username;
        $password = $user->password;
        $access_lvl = $user->access_lvl;

        $accountUpdateQuery = "UPDATE users_info SET id = :id, username = :username, password = :password, access_lvl = :access_lvl WHERE id = :id";
        $accountUpdateStatement = $conn->prepare($accountUpdateQuery);
        $accountUpdateStatement->bindparam(':id', $id);
        $accountUpdateStatement->bindParam(':username', $username);
        $accountUpdateStatement->bindParam(':password', $password);
        $accountUpdateStatement->bindParam(':access_lvl', $access_lvl);
        $accountUpdateStatement->execute();
        break;
}
?>