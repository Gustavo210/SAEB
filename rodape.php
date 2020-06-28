<script src="core/js/index.js?id=<?=rand()?>"></script>
<?php  switch ($_SERVER['REQUEST_URI']) {
    case '/SABE/home.php':
        echo "<script src='core/js/home.js?id=".rand()."'></script>";
        break;

    case '/SABE/professor.php':
        echo "<script src='core/js/colaborador.js?id=".rand()."'></script>";
        break;

    case '/SABE/escola.php':
        echo "<script src='core/js/instituicao.js?id=".rand()."'></script>";
        break;
    
    case '/SABE/aluno.php':
        echo "<script src='core/js/aluno.js?id=".rand()."'></script>";
        break;
    
    case '/SABE/editar.php':
        echo "<script src='core/js/editar.js?id=".rand()."'></script>";
        break;}?>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
        </script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"></script>

</body>

</html>