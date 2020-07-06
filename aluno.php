<?php require_once "cabecalho.php";
if(!isset($_SESSION['user'])){header('location: index.php');die();}?>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4">

            <h2>Cadastrar aluno</h2>
                <span class="tag">Nome do aluno:</span>
                <input class="form-control nome" type="text">
                <fieldset class=" mt-2 form-group">
                    <span class="tag">Genero:</span>
                    <div class="row d-flex justify-content-center">
                        <div class=" col-sm-auto col-auto form-check">
                            <input class="form-check-input sexoM" name="select" type="radio">
                            <label class="form-check-label ">Masculino</label>
                        </div>
                        <div class="col-sm-auto col-auto form-check">
                            <input class="form-check-input sexoF" name="select" type="radio">
                            <label class="form-check-label">Feminino</label>
                        </div>
                    </div>
                </fieldset>
                <span class="tag">Nascimento:</span>
                <input class="form-control datanasc" type="text">
                <span class="tag">Professor:</span>
                <select class="professor form-control">
                    <option value="">Professor</option>
                </select>
                <span class="tag">Responsavel:</span>
                <input class="form-control responsavel" type="text">
                <span class="tag">Matricula:</span>
                <input class="form-control matricula" type="text">
                <span class="tag">Telefone Responsavel:</span>
                <input class="form-control telefone" type="text">
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
                                <div class="col-3 dados">Nome</div>
                                <div class="col-5 dados">Turma</div>
                                <div class="col-3 dados">Matrícula</div>
                                <div class="col dados"></div>
                            </div>
                <div class="resposta"></div>
            <div id="mensagem"></div>
            </div>
        </div>

    </div>
    
<?php require_once "rodape.php";