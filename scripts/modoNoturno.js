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
