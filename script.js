$(document).ready(function(){

    

    $("#telefone").mask("(00) 00000-0000")

    $("#form").submit(function(e){
        e.preventDefault()
    })

    $("#form").validate({

        rules: {

            nome: {required: true},
            email: {required: true, email: true},
            mensagem: {required: true}
        },
        messages: {
            nome: "Nome requerido",
            email: "Email requerido",
            mensagem: "Deixe sua mensagem"
        },
        submitHandler: function(){
            alert("Enviado com sucesso")
        },
    })

})