<?php

// $_POST['name']();


// function userOne($id){
//     $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', "root", "");

//     $users = $pdo->prepare("SELECT * FROM utilisateurs WHERE id=$id");
//     $users -> execute();
//     echo json_encode($users->fetchAll());

// }


// function userTwo(){
//     $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', "root", "");

//     $users = $pdo->prepare("SELECT * FROM utilisateurs WHERE id=2");
//     $users -> execute();
//     echo json_encode($users->fetchAll());
// }

if ($_POST['name']) {
    $id = $_POST['id'];
    $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', "root", "");

    $users = $pdo->prepare("SELECT * FROM utilisateurs WHERE id=$id");
    $users -> execute();
    echo json_encode($users->fetchAll());
}



?>