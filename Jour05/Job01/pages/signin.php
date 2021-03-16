<?php
    session_start();
    require '../pages/class.php';
    $user = new utilisateurs();
    $_POST['signInVerify'] = "";
    $_POST['signInSuccess'] = "";
    
    
    if ($_POST['signinVerify']) {
        $email = $_POST['email'];
        $password = $_POST['password'];
        echo $user->signInVerify($email,$password);
        exit();
    }

    if ($_SESSION['login']) {
        header("location:../");
        exit();
    }


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style.css">
    <title>Document</title>
</head>
<body>
    <main>
        <section>
            <div id="img">
                <img src="../img/img-01.webp" alt="">
            </div>
            <div>
                <ul id="error">
                </ul>
                <h1>Member Sign In</h1>
                <br>
                <form action="" method="post">
                    <input type="text" name="email" id="email" placeholder="Votre email">
                    <br><br>
                    <input type="password" name="password" id="password" placeholder="Votre mot de pass">
                </form>
                <br>
                <button id="button2">CONNEXION</button>
            </div>
        </section>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="../style/script.js"></script>
</body>

</html>