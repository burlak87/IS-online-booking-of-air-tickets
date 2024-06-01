<?php
if ($_POST) {      
    $conn = mysqli_connect("localhost", "burlak87_practic", "BurlakFedor87", "burlak87_practic");    
    if (!$conn) {
      die("Ошибка: " . mysqli_connect_error());    
    }
    $UserName = mysqli_real_escape_string($conn, $_POST["UserName"]);
    $Login = mysqli_real_escape_string($conn, $_POST["Login"]);
    $Password = mysqli_real_escape_string($conn, $_POST["Password"]);  
    $Email = mysqli_real_escape_string($conn, $_POST["Gmail"]);
    $sql = "INSERT INTO USERS (Name, Login, Password, Email) VALUES ('$UserName', '$Login', '$Password', '$Email')";
    if(mysqli_query($conn, $sql)) {
        echo "Данные успешно добавлены";
    } else {
        echo "Ошибка: " . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>