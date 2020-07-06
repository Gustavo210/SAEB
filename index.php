<?php require_once 'cabecalho.php';?>

<link rel="stylesheet" href="core/css/login.css">
<div class="row m-0 d-flex justify-content-center">
    <div class="col-sm-5 fundo">
        <div class="logo-name d-flex justify-content-between">
            <div class="col-sm-4">
                <img src="core/img/logo.png" width="200" alt="">
            </div>
            <div class="col-sm">
                <h1 class="titulo-login">Painel de Gerenciamento SABEscola</h1>
            </div>
        </div>
            <label for="login">Login</label>
            <input name="login" type="text" class="user form-control mb-4">

            <label for="senha">Senha</label>
            <input name="senha" type="password" class=" senha form-control mb-4">
            <?php if(isset($_SESSION['erro'])){?>
            <div class="erro"><?=$_SESSION['erro']?></div>
            <?php }?>
            <div class="row justify-content-end">

                <div class="col-sm-4 col-5">
                    <button type="submit"
                        class="btn btn-block entrar-login btn-primary">
                        <strong>Entrar</strong>
                    </button>
                </div>

            </div>
    </div>

</div>

<?php require_once 'rodape.php';?>