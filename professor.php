<?php require_once "cabecalho.php";
if(!isset($_SESSION['user'])){header('location: index.php');die();}?>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4">
            <h2 class="m-3">Cadastrar Professor</h2>

        <span>Nome do professor:</span>
        <input type="text" class="form-control nome" >

        <span>Telefone:</span>
        <input type="text" class="form-control telefone">

        <span>CPF:</span>
        <input type="text" class="form-control cpf">

        <span>Data de Nascimento:</span>
        <input type="text" class="form-control datanasc" >
        <span>E-mail:</span>
        <input type="email" class="form-control email" >
        <span>Nome de usuário:</span>
        <input type="text" class="form-control user" >
        <span>Senha:</span>
        <input type="password" class="form-control senha" >
        <div class=" p-0 m-0  row d-flex justify-content-bteween">
            <div class="p-0 m-0 col-2 col-sm-2">
                <a class="btn mt-3 btn-danger  " href="home.php">Voltar</a>
            </div>
            <div class="p-0 m-0 col-10 col-sm-10">
                <button class="btn mt-3 btn-primary btn-block "id="salvar_cadastro">Adicionar</button>
            </div>
            
        </div>
        </div>
            <div class="col-sm-8 p-4">
            <input type="text" placeholder="Pesquisa" class="form-control m-2 filter">
            <div class="row p-0 m-0">
                                    <div class="col col-sm-4 dados">Nome</div>
                                    <div class="col col-sm-4 dados">Escola</div>
                                    <div class="col col-sm-2 dados">Telefone</div>
                                    <div class="col dados"></div>
                                </div>
                <div class="resposta"></div>
            <div id="mensagem"></div>
            </div>
        </div>
    </div>
<?php require_once "rodape.php";