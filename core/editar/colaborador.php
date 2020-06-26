<div class="container">
    <h1 class='text-center mt-3 mb-4'>Altera Colaborador</h1>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            <div class="col-sm-5">
                <span>Nome do professor:</span>
                <input type="text" class="form-control nome" >
                <span>Escola:</span>
                <select  class="escola form-control">
                    <option value="">escola</option>
                </select>
                <span>Telefone:</span>
                <input type="text" class="form-control telefone">
                <span>CPF:</span>
                <input type="text" class="form-control cpf">
                <span>Data de Nascimento:</span>
                <input type="text" class="form-control datanasc">
                <span>E-mail:</span>
                <input type="email" class="form-control email">
                <span>Nome de usuário:</span>
                <input type="text" class="form-control user">
                <span>Senha:</span>
                <input type="password" class="form-control senha">
                <button class="btn btn-primary btn-block" id="salvar_cadastro">Salvar</button>
                <a class="btn btn-danger" href="javascript:history.back()">Voltar</a>
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function(){
        $.ajax({
                url:urlInstituicao,
                headers: {"Authorization": token},
                success(respose){
                    respose.map(escola=>{
                        $('.escola ').append(`
                        <option value="${escola.id}">${escola.nome}</option>
                        `)
                    })
                }
            })
        $.ajax({
        url:`${urlColaborador + <?=$_POST['id']?>}`,
        headers: {"Authorization": token},
        success(response){
            $('.nome').val(response.nome)
            $('.escola').val(response.escola)
            $('.telefone').val(formataTelefone(response.telefone))
            $('.cpf').val(formataCpf(response.cpf))
            $('.datanasc').val(dateToEN(response.datanasc))
            $('.email').val(response.email)
            $('.user').val(response.user)
            $('.senha').val(response.senha)
        }})
    })
    $('#salvar_cadastro').on('click',function(){
        $('.form-control').removeClass('erro')
        var nome = $('.nome').val()
        var escola = $('.escola').val()
        var telefone = $('.telefone').val()
        var cpf = $('.cpf').val()
        var dataform = $('.datanasc').val().split('/')
        if(dataform[0]<1 || dataform[0]>31 ||
            dataform[1]<1||dataform[1]>12||
            dataform[3]<1980||dataform[3]>2050){popError("Data"); return}
        var datanasc = `${dataform[2]}-${dataform[1]}-${dataform[0]}`
        var email = $('.email').val()
        var user = $('.user').val()
        var senha = $('.senha').val()

        if(nome.length<=2)
            {$('.nome').addClass('erro');}
        if(escola=="")
            {$('.escola').addClass('erro');}
        if(telefone.length<10)
            {$('.telefone').addClass('erro');}
        if(cpf.length<11)
            {$('.cpf').addClass('erro');}
        if(datanasc.length!=10)
            {$('.datanasc').addClass('erro');}
        if(email.length<5)
            {$('.email').addClass('erro');}
        if(user.length<2)
            {$('.user').addClass('erro');}
        if(senha.length<1)
            {$('.senha').addClass('erro');}
        if(!$('.form-control').hasClass('erro')){
        $.ajax({
        url:`${urlColaborador + <?=$_POST['id']?>}/`,
        headers: {"Authorization": token},
        type:"PUT",
        dataType:"json",
        data:{escola,nome,cpf,telefone,email,datanasc,user,senha},
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
                                location.href="professor.php"
                            }
                        }
                    }
                });
            },
            error(){popError("Colaborador")}
        
        })
    }else{
            popError("Colaborador")
        }
    })
</script>