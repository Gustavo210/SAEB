$(document).ready(function () {
    $.ajax({
        url: urlAluno,
        type: 'get',
        headers: {"Authorization": token},
        beforeSend() {
            $('.aluno_row').html(resposta)
        },
        success(data) {
            $('#retorno').remove()
            var count = 0
            for (let i = 0; i < data.length; i++) {
                if(i<=9){
                    $.ajax({
                        url:`${urlInstituicao}${data[i].turma}`,
                        headers: {"Authorization": token},
                        success(escola){
                    $('.aluno_row').append(`
                    <div usuario="${data[i].id}" class=" row">
                    <div class="col data">${data[i].nome}</div>
                    <div class="col data text-center">${escola.nome}</div>
                    </div>`)
                }})
                }
                count++
            }
            $('#aluno').text(count)
        },
        erro() {
            $('.aluno_row').html(erro)
        }
    })
    $.ajax({
        url: urlInstituicao,
        type: 'get',
        headers: {"Authorization": token},
        beforeSend() {
            $('.escola_row').html(resposta)
        },
        success(data) {
            $('#retorno').remove()
            var count=0
            for (let e = 0; e < data.length; e++) {
                if(e<=9){
                    $('.escola_row').append(`<div usuario="${data[e].id}" class="row">
                    <div class="col data">${data[e].nome}</div>
                    <div class="col data text-center">${data[e].diretor}</div>
                    </div>`)
                }
                count++
            }
            $('#instituicoes').text(count)
            
        },
        erro() {
            $('.escola_row').html(erro)
        }
    })
    $.ajax({
        url: urlColaborador,
        type: 'get',
        headers: {"Authorization": token},
        beforeSend() {
            $('.colaborador_row').html(resposta)
        },
        success(data) {
            $('#retorno').remove()
            var count = 0
            for (let c = 0; c < data.length; c++) {
                if(c<=9){
                    $('.colaborador_row')
                    .append(`<div usuario="${data[c].id}" class="row">
                    <div class="col data">${data[c].nome}</div>
                    <div class="col data text-center">${data[c].email}</div>
                    </div>`)
                }
                count++
            }
            $('#colaboradores').text(count)
        },
        erro() {
            $('.colaborador_row').html(erro)
        }
    })
})