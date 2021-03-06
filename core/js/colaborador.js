$(document).ready(function () {
    $('#salvar_cadastro').on('click',function(){
        $('.form-control').removeClass('erro')
        var nome = $('.nome').val()
        var escola = idUsuario
        var telefone = $('.telefone').val()
        var cpf = $('.cpf').val()
        var dataform = $('.datanasc').val().split('/')
        if(dataform[0]<1 || dataform[0]>31 ||
            dataform[1]<1||dataform[1]>12||
            dataform[3]<1980||dataform[3]>2050){$('.datanasc').addClass('erro');}
        var datanasc = `${dataform[2]}-${dataform[1]}-${dataform[0]}`
        var email = $('.email').val()
        var user = $('.user').val()
        var senha = $('.senha').val()
                    
        if(nome.length<=2)
            {$('.nome').addClass('erro');}
        if(telefone.length<=10)
            {$('.telefone').addClass('erro');}
        if(cpf.length<11)
            {$('.cpf').addClass('erro');}
        if(datanasc.length!=10)
            {$('.datanasc').addClass('erro');}
        if(email.length<=5)
            {$('.email').addClass('erro');}
        if(user.length<=2)
            {$('.user').addClass('erro');}
        if(senha.length<1)
            {$('.senha').addClass('erro');}
        if(!$('.form-control').hasClass('erro')){

            $.ajax({
                url: urlColaborador,
                headers: {"Authorization": token},
                type:"POST",
                dataType:"json",
                data:{escola,nome,cpf,telefone,email,datanasc,user,senha},
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
                    msgError("Erro ao cadastrar colaborador")
                }
            })

        }else{
            msgError("Erro ao cadastrar colaborador")
        }
    })

    $.ajax({
        url:urlInstituicao,
        headers: {"Authorization": token},
        success(respose){
            respose.map(escola=>{
                $('.escola ').append(`<option value="${escola.id}">${escola.nome}</option>`)
            })
        }
    })
    $('.aba-colaborador').css("background-color", "#298C7C")
    $.ajax({
        url: urlColaborador,
        headers: {"Authorization": token},
        beforeSend(){
            $(".resposta").text("Carregando...")
        },
        success(data) {
            $(".resposta").text("")
            data.map(dados => {

                $.ajax({
                    url:`${urlInstituicao}${dados.escola}`,
                    headers: {"Authorization": token},
                    success(response){
                        if(dados.ativo == true){
                $('.resposta').append(`<div usuario="${dados.id}" class="mt-1 items mr-0 ml-0 mb-1 p-0 row">
                                            <div class="col col-sm-4 data">${dados.nome}</div>
                                            <div class="col col-sm-4 data">${response.nome}</div>
                                            <div class="col col-sm-3 data">${formataTelefone(dados.telefone)}</div>
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
                                url: urlColaborador,
                                headers: {"Authorization": token}

                            }).done(function (response) {
                                response.map(item => {

                                    $.ajax({
                                        url:`${urlInstituicao}${item.escola}`,
                                        headers: {"Authorization": token},
                                        success(response){


                                    if (item.id == dados.id) {
                                        self.setTitle(item.nome)
                                        self.setContent(`
                                            <form action="editar.php" class="form" method="post">
                                                <input type="hidden" name="type" value="colaborador">
                                                <input type="hidden" name="id" value="${dados.id}">
                                                CPF: ${formataCpf(item.cpf)}<br>
                                                Data de nascimento: ${dateToEN(item.datanasc)}<br>
                                                Telefone: ${formataTelefone(item.telefone)}<br>
                                                Escola: ${response.nome}<br>
                                                E-mail: ${item.email}<br>
                                                Cadastro: ${dateToEN(item.criacao.substr(0,10))}<br>
                                            </form>`)
                                        }      
                                    }
                                })
                                })
                            }).fail(function () {
                                self.setContent('Erro ao buscar dados');
                            });
                        },
                        buttons: {
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
            } }                                               
        })
            })

        },
        erro() {
            $('.resposta').html(erro)
        }
    })
})