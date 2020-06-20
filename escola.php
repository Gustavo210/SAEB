<?php require_once "cabecalho.php";
if(!isset($_SESSION['user'])){header('location: index.php');die();}?>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4">
                <h2>Cadastrar escola</h2>
                <span class="tag">Nome da escola:</span>
                <input type="text" class="form-control nome">
                <span class="tag">Endereço:</span>
                <input type="text" class="form-control endereco">
                <span class="tag">CNPJ:</span>
                <input type="text" class="form-control cnpj">
                <span class="tag">Diretor:</span>
                <input type="text" class="form-control diretor">

                <span class="tag">Telefone:</span>
                <input type="text" class="form-control telefone">
                <span class="tag">E-mail:</span>
                <input type="email" class="form-control email">
                <fieldset class=" mt-2 form-group">
                    <span class="tag">Tipo:</span>
                    <div class="row d-flex justify-content-center">
                        <div class=" col-sm-auto col-auto form-check">
                            <input class="form-check-input tipoE" name="select" type="radio">
                            <label class="form-check-label">Estadual</label>
                        </div>
                        <div class="col-sm-auto col-auto form-check">
                            <input class="form-check-input tipoM" name="select" type="radio">
                            <label class="form-check-label">Municipal</label>
                        </div>
                    </div>
                </fieldset>
                <span class="tag">Nome de usuário:</span>
                <input type="text" class="form-control user">
                <span class="tag">Senha:</span>
                <input type="password" class="form-control senha">
                <button class="btn mt-3 btn-primary btn-block " id="salvar_cadastro">Enviar</button>
                <a class="btn mt-3 btn-danger " href="home.php">Voltar</a>
            </div>
            <div class="col-sm-8 p-4">
                
            <input type="text" placeholder="Pesquisa" class="form-control m-2 filter">
            <div class="row p-0 m-0">
                                <div class="col dados">Nome</div>
                                <div class="col dados">Telefone</div>
                                <div class="col dados">Diretor</div>
                                <div class="col dados"></div>
                             </div>
            <div class="resposta"></div>
            <div id="mensagem"></div>
            </div>
        </div>

<?php require_once "rodape.php";