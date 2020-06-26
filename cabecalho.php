<?php
 session_start();
 if(isset($_POST['sair'])){
    unset($_SESSION['user']);
    unset($_SESSION['usuario']);
  }
  ?>
  <!doctype html>
  <html lang="pt-br">
  
  <head>
    <title>Painel SAEB Escola</title>
    <meta charset="utf-8">
    <meta name="theme-color" content="#03A696">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/16d67f6777.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="core/css/geral.css">
    <script src="core\js\jquery.mask.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,700;0,900;1,300;1,600;1,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css">
  </head>

  
  <body>
  <?php if(isset($_SESSION['user'])){?>
  <nav style="max-width: 100vw;" class="navbar navbar-expand-lg sticky-top navbar-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Alterna navegação">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand "style="color:#fff" href="home.php"><?php echo $_SESSION['usuario'];?></a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link aba-colaborador" style="color:#fff" href="professor.php"><i class="fas fa-users"></i> Colaborador</a>
        </li>
        <li class="nav-item">
          <a class="nav-link aba-instituicao"style="color:#fff" href="escola.php"><i class="fas fa-school"></i> Instituição</a>
        </li>
        <li class="nav-item">
          <a class="nav-link aba-aluno"style="color:#fff" href="aluno.php"><i class="fas fa-child"></i> Aluno</a>
        </li>
      </ul>
      <form action="index.php" method="post">
        <button class="btn my-2 my-sm-0"style="color:#fff" name="sair" type="submit"><i class="fas fa-sign-out-alt    "></i> Sair</button>
      </form>
    </div>
  </nav>
  <?php }?>