document.getElementById("botaoenviar").addEventListener("click", validaformulario)

function validaformulario(){
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone")){
        alert("Prontinho! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}


