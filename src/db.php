<?php
    // Database configuration
    $host = '127.0.0.1:3306';
    $db = 'c11020webshop';
    $user = 'c11020test';
    $pass = 'oNa5AoBdyiG@H';

    try {
        $conn = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log("Database connection failed: " . $e->getMessage());
        die("An error occurred. Please try again later.");
    }

    // Function to get database connection
    function getDbConnection() {
        global $conn;
        return $conn;
    }
?>
