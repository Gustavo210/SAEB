$(document).ready(function () {
//     $.ajax({
//         url: urlColaborador,
//         type: 'get',
//         headers: {"Authorization": token},
//         beforeSend() {
//             $('.escola_row').html(resposta)
//         },
//         success(data) {
//             console.log(data)
//             for (let e = 0; e < data.length; e++) {
//                 if(data[e].escola ==idUsuario){

                
    
//     $.ajax({
//         url: `http://crmg.herokuapp.com/api/v1/professor/${data[e].id}/alunos/`,
//         type: 'get',
//         headers: {"Authorization": token},
//         beforeSend() {
//             $('.aluno_row').html(resposta)
//         },  
//         success(data) {
//             console.log(data)
//             $('#retorno').remove()
//             var count = 0
//             for (let i = 0; i < data.length; i++) {
//                 if(i<=9){
//                     $.ajax({
//                         url:`http://crmg.herokuapp.com/api/v1/professor/${data[e].id}/turmas/`,
//                         headers: {"Authorization": token},
//                         success(turma){
//                     var linha=`<div usuario="${data[i].id}" class=" row">
//                     <div class="col data">${data[i].nome}</div>`
//                     turma.map(item=>{
//                         if(item.id==data[i].turma){
//                             linha = linha +`<div class="col data text-center">${item.nome}</div>`
//                         }
//                         })
//                     linha =linha+`</div>`
//                     $('.aluno_row').append(linha)
//                 }})
//                 }
//                 count++
//             }
//             $('#aluno').text(count)
//         },
//         erro() {
//             $('.aluno_row').html(erro)
//         }
//     })
// }}
// }
//     })


$.ajax({
    url: urlAluno,
    headers: {"Authorization": token},
    success(data) {
        var count=0
            for (let y = 0; y < data.length; y++) {
            $.ajax({
                url: `http://crmg.herokuapp.com/api/v1/professor/${data[y].professor}/turmas/`,
                headers: {"Authorization": token},
                success(instituicao) {
                    $('#retorno').remove()
                    

                    for (let q = 0; q < instituicao.length; q++) {
                        if(instituicao[q].id == data[y].turma && instituicao[q].professor==data[y].professor ){

                    // var conteudo =`<div usuario="${dados.id}" class="mt-1 items mr-0 ml-0 mb-1 p-0 row">
                    // <div class="col col-sm-3 data">${dados.nome}</div>
                    // <div class="col col-sm-5 data">${instituicao[q].nome}</div>
                    //         <div class="col col-sm-3 data"> @${dados.matricula}</div>
                    //         <div class="col-0 data">
                    //         <button type="button" class="btn btn-primary dado_${dados.id}">
                    //         <i class="fas fa-plus"></i>
                    //         </button>
                    //         </div>
                    //         </div>`

                    // $('.resposta').append(conteudo)


                if(y<=9){
                    $('.aluno_row').append(`<div usuario="${data[y].id}" class="row">
                    <div class="col data">${data[y].nome}</div>
                    <div class="col data text-center">${instituicao[q].nome}</div>
                    </div>`)
                }
                count++
            
                $('#aluno').text(count)

                }
            }
                }
            })
        }
    },
    erro() {
        $('.resposta').html(erro)
    }
})



    // $.ajax({
    //     url: urlInstituicao,
    //     type: 'get',
    //     headers: {"Authorization": token},
    //     beforeSend() {
    //         $('.escola_row').html(resposta)
    //     },
    //     success(data) {
    //         $('#retorno').remove()
    //         var count=0
    //         for (let e = 0; e < data.length; e++) {
    //             if(e<=9){
    //                 $('.escola_row').append(`<div usuario="${data[e].id}" class="row">
    //                 <div class="col data">${data[e].nome}</div>
    //                 <div class="col data text-center">${data[e].diretor}</div>
    //                 </div>`)
    //             }
    //             count++
    //         }
    //         $('#instituicoes').text(count)
            
    //     },
    //     erro() {
    //         $('.escola_row').html(erro)
    //     }
    // })
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