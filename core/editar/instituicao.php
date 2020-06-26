<div class="container">
    <h1 class='text-center mt-3 mb-4'>Altera Instítuição</h1>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <div id="mensagem"></div>
                <span class="tag">Nome da escola:</span>
                <input type="text" class="form-control nome">
                <span class="tag">Endereço:</span>
                <input type="text" class="form-control endereco">
                <span class="tag">CNPJ:</span>
                <input type="text" class="form-control cnpj">
                <span class="tag">Diretor:</span>
                <input type="text" class="form-control diretor">
                <span class="tag">Telefone:</span>
                <input type="text" class="form-control telefone">
                <span class="tag">E-mail:</span>
                <input type="email" class="form-control email">

                <fieldset class=" mt-2 form-group">
                    <span class="tag">Tipo:</span>
                    <div class="row d-flex justify-content-center">
                        <div class=" col-sm-auto col-auto form-check">
                            <input class="form-check-input tipoE" name="select" type="radio">
                            <label class="form-check-label">Estadual</label>
                        </div>
                        <div class="col-sm-auto col-auto form-check">
                            <input class="form-check-input tipoM" name="select" type="radio">
                            <label class="form-check-label">Municipal</label>
                        </div>
                    </div>
                </fieldset>
                <span class="tag">Nome de usuário:</span>
                <input type="text" class="form-control user">
                <span class="tag">Senha:</span>
                <input type="password" class="form-control senha">
                <button class="btn btn-primary btn-block" id="salvar_cadastro">Enviar</button>
                <br>
                <a class="btn btn-danger" href="javascript:history.back()">Voltar</a>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function(){
        
        $.ajax({
        url:`${urlInstituicao + <?=$_POST['id']?>}`,
        headers: {"Authorization": token},
        success(response){
            $('.nome').val(response.nome)
            $('.endereco').val(response.endereco)
            $('.cnpj').val(response.cnpj)
            $('.diretor').val(response.diretor)
            $('.telefone').val(formataTelefone(response.telefone))
            $('.email').val(response.email)
            $('.user').val(response.user)
            $('.senha').val(response.senha)
            if(response.tipo=="E"){$('.tipoE').attr('checked',true)}
                else if(response.tipo=="M"){$('.tipoM').attr('checked',true)}
        }})
    })
    $('#salvar_cadastro').on('click',function(){
        $('.form-control').removeClass('erro')
        var nome = $('.nome').val()
        var endereco = $('.endereco').val()
        var cnpj = $('.cnpj').val()
        var diretor = $('.diretor').val()
        var telefone = $('.telefone').val()
        var email = $('.email').val()
        if($('.tipoE').is(':checked')){var tipo = "E"}
        if($('.tipoM').is(':checked')){var tipo = "M"}
        var user = $('.user').val()
        var senha = $('.senha').val()

        if(nome.length<=2)
            {$('.nome').addClass('erro');}
        if(endereco.length<5)
            {$('.endereco').addClass('erro');}
        if(cnpj.length<14)
            {$('.cnpj').addClass('erro');}
        if(diretor=="")
            {$('.diretor').addClass('erro');}
        if(telefone.length<10)
            {$('.telefone').addClass('erro');}
        if(email.length<5)
            {$('.email').addClass('erro');}
        if(user.length<2)
            {$('.user').addClass('erro');}
        if(senha.length<1)
            {$('.senha').addClass('erro');}
        if(!$('.form-control').hasClass('erro')){

        $.ajax({
        url:`${urlInstituicao + <?=$_POST['id']?>}/`,
        headers: {"Authorization": token},
        type:"PUT",
        dataType:"json",
        data:{nome,endereco,diretor,cnpj,telefone,email,tipo,user,senha},
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
                                location.href="escola.php"
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
</script>