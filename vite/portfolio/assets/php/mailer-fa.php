<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "table_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $sql = "INSERT INTO contact_form_entries (full_name, email, subject, message) VALUES (?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $full_name, $email, $subject, $message);

    if ($stmt->execute()) {
        echo "پیام شما با موفقیت ارسال شد.";
    } else {
        echo "ارور: " . $sql . "<br>" . $conn->error;
    }
}

$stmt->close();
$conn->close();
?>
