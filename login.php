// login_process.php
<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST["email"];
        $password = $_POST["password"];
        
        // Простая проверка на данные (для примера)
        if ($email == "admin@example.com" && $password == "password") {
            header("Location: welcome.html");  // Страница приветствия или главная
            exit;
        } else {
            echo "Неверный логин или пароль.";
        }
    }
?>
