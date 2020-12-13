/**Ativar e desativar modo noturno */

document.getElementById("modo").addEventListener("click", alternarModo);
function alternarModo()
{
        var modo = document.body;
        modo.classList.toggle("modoNoturno");

        var button = document.getElementById("modo");

        if(button.textContent === "Ativar modo noturno")
        {
            button.textContent = "Desativar modo noturno"
        }
        else
        {
            button.textContent = "Ativar modo noturno"
        }
}


/**Verificar se existem dados no formulário */

var enviar = document.getElementById("enviar").addEventListener("click", verificarFormularios);

function verificarFormularios()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;

    if(email != "" && comments != "")
    {
        resetar();
        if(name != "")
        {
            alert("Muito obrigada pelo seu feedback, " + name + "!");
            window.location.href = "../index.html" 
        }
        else
        {
            alert("Muito obrigada pelo seu feedback, " + " Anônimo(a)" + "!");
            window.location.href = "../index.html"             
        }
    }
    else
    {
        alert("Email e comentários são obrigatórios para enviar o feedback.");
    }

}


function resetar()
{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("comments").value = "";
}
