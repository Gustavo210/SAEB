<?php require_once 'cabecalho.php';?>

<link rel="stylesheet" href="core/css/login.css">
<div class="row m-0 d-flex justify-content-center">
    <div class="col-sm-5 fundo">

        <h1 class="titulo-login">Painel <br>SABE Escola</h1>
        <form action="core/processa/logaUsuario.php" method="post">

            <label for="login">Login</label>
            <input name="login" type="text" class="user form-control mb-4">

            <label for="senha">Senha</label>
            <input name="senha" type="password" class=" senha form-control mb-4">
            <?php if(isset($_SESSION['erro'])){?>
                <div class="erro"><?=$_SESSION['erro']?></div>
                <?php }?>
            <div class="row justify-content-end">

                <div class="col-sm-4 col-5">
                    <button type="submit" class="btn btn-block entrar-login btn-primary"><strong>Entrar</strong></button>
                </div>
            </div>

        </form>
    </div>

</div>

<?php require_once 'rodape.php';?>