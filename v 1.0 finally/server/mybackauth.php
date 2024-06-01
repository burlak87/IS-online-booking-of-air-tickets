<?php
$bd = new mysqli('localhost','burlak87_practic','BurlakFedor87','burlak87_practic'); 
 
$query = ("SELECT id FROM USERS WHERE `login`='${_POST["login"]}' AND `password`=MD5('${_POST["password"]}')"); 
 
$result = $bd ->query($query); 
 
if($result -> num_rows){ 
    echo json_encode("Вы авторизированны", JSON_UNESCAPED_UNICODE); 
} else{ 
    echo "Ошибка: " . mysqli_error($bd); 
} 
?>