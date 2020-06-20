<script src="core/js/index.js?id=<?=rand()?>"></script>
<?php switch ($_SERVER['REQUEST_URI']) {
    case '/SAEB/home.php':
        echo "<script src='core/js/home.js?id=".rand()."'></script>";
        break;

    case '/SAEB/professor.php':
        echo "<script src='core/js/colaborador.js?id=".rand()."'></script>";
        break;

    case '/SAEB/escola.php':
        echo "<script src='core/js/instituicao.js?id=".rand()."'></script>";
        break;
    
    case '/SAEB/aluno.php':
        echo "<script src='core/js/aluno.js?id=".rand()."'></script>";
        break;
    
    case '/SAEB/editar.php':
        echo "<script src='core/js/editar.js?id=".rand()."'></script>";
        break;}?>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
        </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"></script>

</body>

</html>