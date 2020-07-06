<?php require_once 'cabecalho.php';
if(!isset($_SESSION['user'])){header('location: index.php');die();}?>
<div class="container-fluid">
<div class="infoPainel">
  <div class="row m-0">
    <div class="col-sm-auto apresentacao">

      <strong>Bem Vindo</strong> ao painel de gerenciamento do aplicativo SABEscola

    </div>
    <div class="col-sm-auto"></div>
  </div>
</div>

  <div class="row">

    <div class="col-sm  card-colaborador">
      <div class="title row d-flex justify-content-between">
        <div class="col-auto">
          <h3>Colaboradores</h3>
        </div>
        <div class="col-auto">
          <span id="colaboradores"></span>
        </div>
      </div>
      <div class="titulo_conteudo">
      <div class="row">
        <div class="col col-sm text-center"><strong>Nome</strong></div>
        <div class="col col-sm text-center"><strong>E-mail</strong></div>
      </div>
      </div>
      <div class="colaborador_row"></div>
    </div>

    <!-- <div class="col-sm  card-instituicoes">
      <div class="title row d-flex justify-content-between">
        <div class="col-auto">
          <h3>Instituições</h3>
        </div>
        <div class="col-auto">
          <span id="instituicoes"></span>
        </div>
      </div>
      <div class="titulo_conteudo">
      <div class="row">
        <div class="col col-sm text-center"><strong>Nome</strong></div>
        <div class="col col-sm text-center"><strong>Diretora</strong></div>
      </div>
      </div>
      <div class="escola_row"></div>
    </div> -->

    <div class="col-sm  card-aluno">
      <div class="title row d-flex justify-content-between">
        <div class="col-auto">
          <h3>Alunos</h3>
        </div>
        <div class="col-auto">
          <span id="aluno"></span>
        </div>
      </div>
<div class="titulo_conteudo">

  <div class="row">
    <div class="col col-sm text-center"><strong>Nome</strong></div>
    <div class="col col-sm text-center"><strong>Turma</strong></div>
  </div>
</div>
      <div class="aluno_row"></div>
    </div>

  </div>

</div>
<?php require_once 'rodape.php';?>