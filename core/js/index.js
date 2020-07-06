var urlLogin = `https://crmg.herokuapp.com/api/v1/loginescola/`
$('.entrar-login').on('click',function(e){
    var user = $('.user').val()
    var senha = $('.senha').val()
    e.preventDefault()
    $.ajax({
        url:urlLogin,
        type:"POST",
        dataType:"json",
        data:{user,senha},
        beforeSend(){
            $('.entrar-login')
            .attr("disabled", true)
            .html(`<span class="spinner-border spinner-border-sm m-1" role="status" aria-hidden="trues"></span><b> Carregando...</b>`)
        },
        success(data){
            console.log(data)
            localStorage.setItem("id",data[0].id)
            localStorage.setItem("nome",data[0].nome)
            localStorage.setItem("user",data[0].user)

            $.ajax({
                url:"core/processa/logaUsuario.php",
                type:"POST",
                data:{
                    login:data[0].user,
                    senha:data[0].senha
                },
                success(){
                    location.href="home.php"
                },
                error(){
                    $('.entrar-login')
                    .attr("disabled", false)
                    .html(`<strong>Entrar</strong>`)
                    msgError("Erro ao conectar")
                }
            })
        },
        error(){
            $('.entrar-login')
            .attr("disabled", false)
            .html(`<strong>Entrar</strong>`)
            msgError("Erro ao conectar")
        }
    })
    
})
var idUsuario =localStorage.getItem("id")

var listaColaboradores = `http://crmg.herokuapp.com/api/v1/escola/${idUsuario}/professores/`
var urlColaborador = `https://crmg.herokuapp.com/api/v1/professor/`
var urlAluno = `https://crmg.herokuapp.com/api/v1/aluno/`
var urlInstituicao = `https://crmg.herokuapp.com/api/v1/escola/`
var token = `Token 6d60623d8e4a17af092bcb3068783b302198ae63`
var resposta = `<div id="retorno">carregando</div>`
var erro = `<div id="retorno">A pagina não foi encontrada</div>`

function dateToEN(date) {
    return date.split('-').reverse().join('/');
}

function formataCpf(cpf) {
    if (cpf.length === 11) {
        return cpfF = cpf.substr(0, 3) + "." + cpf.substr(3, 3) + "." + cpf.substr(6, 3) + "-" + cpf.substr(9, 2)
    } else {
        return cpf
    }
}

function retornaSexo(sexo) {
    if (sexo === "M") {
        return "Masculino"
    } else if (sexo === "F") {
        return "Feminino"
    } else {
        return "Indefinido"
    }
}

function formataTelefone(telefone) {
    if (telefone.length === 10) {
        return TF = "(" + telefone.substr(0, 2) + ") " + telefone.substr(2, 4) + "-" + telefone.substr(2, 4)
    } else if (telefone.length == 11) {
        return TF = "(" + telefone.substr(0, 2) + ") " + telefone.substr(2, 1) + " " + telefone.substr(3, 4) + "-" + telefone.substr(7, 4)
    } else {
        return telefone
    }
}

$(document).ready(function () {
    $(".filter").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".resposta >.items").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$('.datanasc').mask('00/00/0000', {placeholder: "__/__/____"});
$('.cpf').mask('000.000.000-00');
$('.cnpj').mask('00.000.000/0000-00');
$('.telefone').mask('(00) 0 0000-0000');

function msgError(param){
    $.confirm({
        title: '',
        content: param,
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


