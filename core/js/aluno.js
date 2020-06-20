$(document).ready(function () {
    $('#salvar_cadastro').on('click',function(){
        $('.form-control').removeClass('erro')
        var nome = $('.nome').val()
        var sexoM = $('.sexoM')
        var sexoF = $('.sexoF')
        var datanasc = $('.datanasc').val()
        var turma = $('.turma').val()
        var professor = $('.professor').val()
        var matricula = $('.matricula').val()
        var nome_responsavel = $('.responsavel').val()
        var telefone_responsavel = $('.telefone').val()
                    
        if(nome.length<=5)
            {$('.nome').addClass('erro');}
        if(sexoM.is(':checked')){
            var sexo = "M"
        }
        if(sexoF.is(':checked')){
            var sexo = "F"
        }
        if(datanasc=="")
            {$('.datanasc').addClass('erro');}
        if(turma=="")
            {$('.turma').addClass('erro');}
        if(professor=="")
            {$('.professor').addClass('erro');}
        if(matricula<=5)
            {$('.matricula').addClass('erro');}
        if(nome_responsavel.length<=5)
            {$('.responsavel').addClass('erro');}
        if(telefone_responsavel.length<10)
            {$('.telefone').addClass('erro');}

        if($('.form-control').hasClass('erro')){return}

        $.ajax({
            url: urlAluno,
            headers: {"Authorization": token},
            type:"POST",
            dataType:"json",
            data:{turma,professor,nome,matricula,datanasc,sexo,nome_responsavel,telefone_responsavel},
            success(){
                $.confirm({
                    title: 'Sucesso',
                    content: 'Usuário cadastrado com sucesso!',
                    type: 'green',
                    typeAnimated: true,
                    buttons: {
                        tryAgain: {
                            text: 'Ok',
                            btnClass: 'btn-green',
                            action: function(){
                                location.reload();
                            }
                        }
                    }
                });
            },
            error(){
                $.confirm({
                    title: 'Erro',
                    content: 'Erro ao cadastrar usuário',
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


    $.ajax({
        url:urlColaborador,
        headers: {"Authorization": token},
        success(respose){
            respose.map(opt=>{
                $('.professor ').append(`<option value="${opt.id}">${opt.nome}</option>`)
            })
        }
    })
    $.ajax({
        url:urlInstituicao,
        headers: {"Authorization": token},
        success(respose){
            respose.map(escola=>{
                $('.turma ').append(`<option value="${escola.id}">${escola.nome}</option>`)
            })
        }
    })
    $('.aba-aluno').css("background-color", "#298C7C")
    $.ajax({
        url: urlAluno,
        headers: {"Authorization": token},
        success(data) {
            data.map(dados => {
                $.ajax({
                    url: `${urlInstituicao}${dados.turma}`,
                    headers: {"Authorization": token},
                    success(instituicao) {
                        $('.resposta').append(`<div usuario="${dados.id}" class="mt-1 items mr-0 ml-0 mb-1 p-0 row">
                                                    <div class="col col-sm-3 data">${dados.nome}</div>
                                                    <div class="col col-sm-3 data">${instituicao.nome}</div>
                                                    <div class="col col-sm-3 data"> @${dados.matricula}</div>
                                                    <div class="col-0 data">
                                                        <button type="button" class="btn btn-primary dado_${dados.id}">
                                                            <i class="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>`)


                        $(`.dado_${dados.id}`).on('click', function () {
                            var linha = $(this).parent().parent()
                            $.confirm({
                                closeIcon: function () {},
                                content: function () {
                                    var self = this;
                                    return $.ajax({
                                        url: urlAluno,
                                        headers: {"Authorization": token}


                                    }).done(function (data) {
                                        data.map(item => {

                                            $.ajax({
                                                url: `${urlInstituicao}${item.turma}`,
                                                headers: {"Authorization": token},
                                                success(escola) {
                                                    
                                                    $.ajax({
                                                        url: `${urlColaborador}${item.professor}`,
                                                        headers: {"Authorization": token},
                                                        success(colaborador) {

                                                            if (item.id == dados.id) {
                                                                self.setTitle(item.nome)
                                                                self.setContent(`
                                                        <form action="editar.php" class="form" method="post">
                                                            <input type="hidden" name="type" value="aluno">
                                                            <input type="hidden" name="id" value="${dados.id}">
                                                                        <h6>Aluno</h6>
                                                                &nbsp Nome: ${item.nome}<br>
                                                                &nbsp Genero: ${retornaSexo(item.sexo)}<br>
                                                                &nbsp Data de nascimento: ${dateToEN(item.datanasc)}<br><br>
                                                                        <h6>Escola</h6>
                                                                &nbsp Turma: ${escola.nome}<br>
                                                                &nbsp Professor: ${colaborador.nome}<br>
                                                                &nbsp Matricula: @${item.matricula}<br>
                                                                &nbsp Cadastro: ${dateToEN(item.criacao.substr(0,10))}<br><br>
                                                                        <h6>Responsável</h6>
                                                                &nbsp Nome: ${item.nome_responsavel}<br>
                                                                &nbsp Telefone: ${formataTelefone(item.telefone_responsavel)}<br>
                                                        </form>`)
                                                            }
                                                        }
                                                    })
                                                }
                                            })
                                        })
                                    }).fail(function () {
                                        self.setContent('Erro ao buscar dados');
                                    });
                                },
                                buttons: {
                                    Excluir: {
                                        text: `Excluir`,
                                        btnClass: 'btn-red',
                                        action: function () {

                                            $.confirm({
                                                title: `Deseja excluir ${dados.nome}?`,
                                                content: `O usuário ${dados.nome} será apagado do sistema!!`,
                                                autoClose: 'cancelAction|8000',
                                                buttons: {
                                                    deleteUser: {
                                                        text: 'Excluir',
                                                        btnClass: 'btn-red',
                                                        action: function () {
                                                            $.ajax({
                                                                url: `${urlAluno + dados.id}`,
                                                                headers: {"Authorization": token},
                                                                type:"DELETE",
                                                                success(){
                                                                    $.alert({
                                                                        title: "",
                                                                        content: 'Usuário deletado com sucesso.',
                                                                        buttons: {
                                                                            confirmar: {
                                                                                text: "Ok",
                                                                                action: function () {
                                                                                    linha.remove()   
                                                                                }
                                                                            }
                                                                        }
                                                                    });
                                                                }
                                                            })
                                                                
                                                        }
                                                    },
                                                    cancelAction: {
                                                        text: 'Cancelar',
                                                        action: function () {
                                                            $.alert('Ação cancelada.');
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                    },
                                    Editar: {
                                        text: `Editar`,
                                        btnClass: 'btn-blue',
                                        action: function () {
                                            var form = this.$content.find('.form');
                                            form.submit()
                                        }
                                    }
                                }
                            });
                        })
                    }
                })
            })
        },
        erro() {
            $('.resposta').html(erro)
        }
    })
})