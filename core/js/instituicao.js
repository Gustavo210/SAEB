$(document).ready(function () {
    $('#salvar_cadastro').on('click',function(){
        $('.form-control').removeClass('erro')
        var nome = $('.nome').val()
        var endereco = $('.endereco').val()
        var cnpj = $('.cnpj').val()
        var diretor = $('.diretor').val()
        var telefone = $('.telefone').val()
        var email = $('.email').val()
        var municipal = $('.tipoE')
        var estadual = $('.tipoM')
        var user = $('.user').val()
        var senha = $('.senha').val()
                    
        if(nome.length<=2)
            {$('.nome').addClass('erro');}
        if(endereco<=2)
            {$('.endereco').addClass('erro');}
        if(cnpj.length<14)
            {$('.cnpj').addClass('erro');}
        if(diretor<2)
            {$('.diretor').addClass('erro');}
        if(user.length<2)
            {$('.user').addClass('erro');}
        if(senha.length<1)
            {$('.senha').addClass('erro');}
        if(telefone.length<10)
            {$('.telefone').addClass('erro');}
        if(email.length<=5)
            {$('.email').addClass('erro');}
        if(municipal.is(':checked')){
            var tipo = "M"
        }else
        if(estadual.is(':checked')){
            var tipo = "E"
        }else{
            popError("Tipo de Intituição"); return
        }
        if(!$('.form-control').hasClass('erro')){

        $.ajax({
            url: urlInstituicao,
            headers: {"Authorization": token},
            type:"POST",
            dataType:"json",
            data:{nome,endereco,diretor,cnpj,telefone,email,tipo,user,senha},
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
            error(){popError("Instituição")}
        })
    }else{
        popError("Instituição")
    }

    })


    $.ajax({
        url:urlColaborador,
        headers: {"Authorization": token},
        success(respose){
            respose.map(professor=>{
                $('.diretor').append(`<option value="${professor.id}">${professor.nome}</option>`)
            })
        }
    })
    $('.aba-instituicao').css("background-color", "#298C7C")
    $.ajax({
        url: urlInstituicao,
        headers: {"Authorization": token},
        success(data) {
            data.map(dados => {
                $('.resposta').append(`<div usuario="${dados.id}" class="mt-1 items mr-0 ml-0 mb-1 p-0 row">
                                        <div class="col col-sm-3 data">${dados.nome}</div>
                                        <div class="col col-sm-3 data">${formataTelefone(dados.telefone)}</div>
                                        <div class="col col-sm-3 data">${dados.diretor}</div>
                                        <div class="col-0 data"><button type="button" class="btn btn-primary dado${dados.id}"><i class="fas fa-plus"></i></button>
                                        </div>
                                    </div>`)

                $(`.dado${dados.id}`).on('click', function () {
                    var linha = $(this).parent().parent()

                    $.confirm({
                        closeIcon: function () {},
                        content: function () {
                            var self = this;
                            return $.ajax({
                                url: urlInstituicao,
                                headers: {"Authorization": token}

                            }).done(function (response) {
                                response.map(item => {
                                    if (item.id == dados.id) {
                                        self.setTitle(item.user)
                                        self.setContent(`
                                        <form action="editar.php" class="form" method="post">
                                            <input type="hidden" name="type" value="instituicao">
                                            <input type="hidden" name="id" value="${dados.id}">
                                            Nome: ${item.nome}<br>
                                            Endereço: ${item.endereco}<br>
                                            CNPJ: ${formataCpf(item.cnpj)}<br>
                                            Diretor: ${item.diretor}<br>
                                            Telefone: ${formataTelefone(item.telefone)}<br>
                                            Cadastro: ${dateToEN(item.criacao.substr(0,10))}<br>
                                            E-mail: ${item.email}<br>
                                            Tipo: ${item.tipo=="M"?"Municipal":"Estadual"}<br>
                                        </form>
                                        `)
                                    }
                                })
                            }).fail(function () {
                                self.setContent('Erro ao buscar dados')
                            })
                        },
                        buttons: {
                            Excluir: {
                                text: `Excluir`,
                                btnClass: 'btn-red',
                                action: function () {
                                    $.confirm({
                                        title: `Deseja excluir ${dados.user}?`,
                                        content: `O usuário ${dados.user} será apagado do sistema!!`,
                                        autoClose: 'cancelAction|8000',
                                        buttons: {
                                            deleteUser: {
                                                text: 'Excluir',
                                                btnClass: 'btn-red',
                                                action: function () {
                                                    $.ajax({
                                                        url: `${urlInstituicao + dados.id}`,
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
            })
        },
        erro() {
            $('.resposta').html(erro)
        }
    })
})