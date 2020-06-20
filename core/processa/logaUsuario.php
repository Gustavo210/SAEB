<?php
require_once "../../cabecalho.php";
if($_POST['login']!=""&& $_POST['senha']!=""){
    $_SESSION['usuario'] = $_POST['login'];
    $_SESSION['user'] = $_POST['login'].$_POST['senha'];
    header('location: ../../home.php');
    die();
}else{
    $_SESSION['erro']="Usuario e senha invalidos";
    header('location: ../../index.php');
    die();
}