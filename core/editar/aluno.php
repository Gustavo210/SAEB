
    <div class="container">

        <h1 class='text-center mt-3 mb-4'>Altera Aluno</h1>

        <div class="container-fluid">

            <div class="row d-flex justify-content-center">

                <div class="col-sm-6">
                    <span class="tag">Nome do aluno:</span>
                    <input class="form-control nome" type="text">
                    <fieldset class=" mt-2 form-group">
                        <span class="tag">Genero:</span>
                        <div class="row d-flex justify-content-center">
                            <div class=" col-sm-auto col-auto form-check">
                                <input class="form-check-input generoM" name="select" type="radio">
                                <label class="form-check-label" for="gridRadios1">Masculino</label>
                            </div>
                            <div class="col-sm-auto col-auto form-check">
                                <input class="form-check-input generoF" name="select" type="radio">
                                <label class="form-check-label" for="gridRadios2">Feminino</label>
                            </div>
                        </div>
                    </fieldset>
                    <span class="tag">Nascimento:</span>
                    <input class="form-control datanasc" type="date">
                    <span class="tag">Turma:</span>
                    <select class="turma form-control">
                        <option value="">Turma</option>
                    </select>
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

                    <button class="btn btn-primary btn-block" id="salvar_cadastro">Enviar</button>
                    <br>
                    <a class="btn btn-danger" href="javascript:history.back()">Voltar</a>
                </div>
                
            </div>

        </div>
    </div>
    <script>
        $(document).ready(function(){
            $.ajax({
                url:urlColaborador,
                headers: {"Authorization": token},
                success(respose){
                    respose.map(opt=>{
                        $('.professor ').append(`
                        <option value="${opt.id}">${opt.nome}</option>
                        `)
                    })
                }
            })
            $.ajax({
                url:urlInstituicao,
                headers: {"Authorization": token},
                success(respose){
                    respose.map(escola=>{
                        $('.turma ').append(`
                        <option value="${escola.id}">${escola.nome}</option>
                        `)
                    })
                }
            })
            $.ajax({
            url:`${urlAluno + <?=$_POST['id']?>}`,
            headers: {"Authorization": token},
            success(response){
                $('.nome').val(response.nome)
                if(response.sexo=="M"){$('.generoM').attr('checked',true)}
                    else if(response.sexo=="F"){$('.generoF').attr('checked',true)}
                $('.datanasc').val(response.datanasc)
                $('.turma').val(response.turma)
                $('.professor').val(response.professor)
                $('.responsavel').val(response.nome_responsavel)
                $('.telefone').val(response.telefone_responsavel)
                $('.matricula').val(response.matricula)
            }})
        })

        $('#salvar_cadastro').on('click',function(){
        $('.form-control').removeClass('erro')
            var sexo =""
            var nome = $('.nome').val()
            if($('.generoM').is(':checked')){sexo = "M"}
            if($('.generoF').is(':checked')){sexo = "F"}
            var datanasc = $('.datanasc').val()
            var turma = $('.turma').val()
            var professor = $('.professor').val()
            var nome_responsavel = $('.responsavel').val()
            var matricula = $('.matricula').val()
            var telefone_responsavel = $('.telefone').val()

            if(nome.length<=5)
                {$('.nome').addClass('erro');}
            if(datanasc=="")
                {$('.datanasc').addClass('erro');}
            if(turma=="")
                {$('.turma').addClass('erro');}
            if(professor=="")
                {$('.professor').addClass('erro');}
            if(nome_responsavel.length<5)
                {$('.responsavel').addClass('erro');}
            if(matricula.length<5)
                {$('.matricula').addClass('erro');}
            if(telefone_responsavel.length<10)
                {$('.telefone').addClass('erro');}
            if($('.form-control').hasClass('erro')){return}

        $.ajax({
        url:`${urlAluno + <?=$_POST['id']?>}/`,
        headers: {"Authorization": token},
        type:"PUT",
        dataType:"json",
        data:{turma,professor,nome,matricula,datanasc,sexo,nome_responsavel,telefone_responsavel},
        success(response){
            $.confirm({
                    title: 'Sucesso',
                    content: 'Usuário alterado sucesso!',
                    type: 'green',
                    typeAnimated: true,
                    buttons: {
                        tryAgain: {
                            text: 'Ok',
                            btnClass: 'btn-green',
                            action: function(){
                                location.href="aluno.php"
                            }
                        }
                    }
                });
            },
            error(){
                $.confirm({
                    title: 'Erro',
                    content: 'Erro editar dados',
                    type: 'red',
                    typeAnimated: true,
                    buttons: {
                        tryAgain: {
                            text: 'Ok',
                            btnClass: 'btn-red',
                            action: function(){
                            }
                        }
                    }
                });
            }
        
        })
    })

    </script>