<?php
require_once 'cabecalho.php';
if(!isset($_SESSION['user'])){header('location: index.php');die();}
isset($_POST['type'])?$type = $_POST['type']:$type = "";

switch ($type) {
    case 'aluno':
        require_once 'core/editar/aluno.php';
        break;

    case 'instituicao':
        require_once 'core/editar/instituicao.php';
        break;

    case 'colaborador':
        require_once 'core/editar/colaborador.php';
        break;
    default:
        echo "Erro esta pagina não existe!!";
        break;
}

require_once 'rodape.php';