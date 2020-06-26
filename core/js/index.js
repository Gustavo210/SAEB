var urlColaborador = `https://crmg.herokuapp.com/api/v1/professor/`
var urlAluno = `https://crmg.herokuapp.com/api/v1/aluno/`
var urlInstituicao = `https://crmg.herokuapp.com/api/v1/escola/`
var token = `Token f77f538699515c7177256df7429365cb7a7ed6be`
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

function popError(param){
    $.confirm({
        title: 'Erro',
        content: `Erro ao cadastrar ${param}`,
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