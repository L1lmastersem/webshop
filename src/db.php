<?php
$host = '38252.hosts2.ma-cloud.nl'; // docker service name
$db = 'webshop';
$user = 'user';
$pass = 'secret';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
