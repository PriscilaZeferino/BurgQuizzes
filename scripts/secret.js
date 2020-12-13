window.onload = function ()
{
    alert("Oh, não! Você descobriu o jogo secreto!");
    mostrarHistoria(contador);
    
}

var container = document.querySelector(".container");

var contador = 1;

function mostrarHistoria(contador)
{
    var p = document.createElement("p");
    p.textContent = "Você não deveria estar aqui!"

    var p2 = document.createElement("p");
    p2.textContent = "Eu sei, mas algo me disse que eu deveria vir."

    var p3 = document.createElement("p");
    p3.textContent = "toc ploc zzz"

    var p4 = document.createElement("p");
    p4.textContent = "Você está ouvindo isso?"

    var p5 = document.createElement("p");
    p5.textContent = "Estou. Isso nao é bom, né?"

    var p6 = document.createElement("p");
    p6.textContent = "Nem um pouco..."

    var p7 = document.createElement("p");
    p7.textContent = "AAAAAAAAAAAAAAAAAAA"


    switch(contador)
    {
        case 1:
            container.appendChild(p);
            break;

        case 2:
            container.appendChild(p2);
                break;

            case 3:
                container.appendChild(p3);
                break;

            case 4:
                container.appendChild(p4);
                break;
            
            case 5:
                container.appendChild(p5);
                break;
            
            case 6:
                container.appendChild(p6);
                break;
                    
            case 7:
                container.appendChild(p7);
                break;

            default:
                break;
        }

        if(contador <= 7)
        {
            setTimeout(function()
            {
                contador++;
               mostrarHistoria(contador);
        
            }, 2000)
            console.log(contador)
        }
        else
        {
            contador = 1;
            mostrarHistoriaParte2(contador);

        }
}


function mostrarHistoriaParte2(contador)
{
    var p = document.createElement("p");
    p.textContent = "Algo muito estranho aconteceu.";

    var p2 = document.createElement("p");
    p2.textContent = "Você acordou no meio de uma floresta. Uma floresta densa e tão escura que você mal conseguia se enxergar.";

    var p3 = document.createElement("p");
    p3.textContent = "Você olhou ao redor e tudo que você encontrou foi um pedaço de papel rasgado com uma mensagem pela metade.";

    var p4 = document.createElement("p");
    p4.textContent = "'Era nosso lugar favorito. Venha m...'";

    var p5 = document.createElement("p");
    p5.textContent = "A foto esta rasgada e voce mal consegue reconhcer o lugar.";

    var p6 = document.createElement("p");
    p6.textContent = "Então, você resolve encontrar a outra metade da foto.";

    switch(contador)
    {
        case 1:
            container.appendChild(p);
            break;

        case 2:
            container.appendChild(p2);
                break;

            case 3:
                container.appendChild(p3);
                break;

            case 4:
                container.appendChild(p4);
                break;
            
            case 5:
                container.appendChild(p5);
                break;
            
            case 6:
                container.appendChild(p6);
                break;


            default:
                break;
        }

        if(contador < 6)
        {
            setTimeout(function()
            {
                contador++;
               mostrarHistoriaParte2(contador);
        
            }, 2000)
        }
        else
        {
            contador = 1;
            encontrarFoto();
        }
}

function encontrarFoto()
{
    var img = document.createElement("img");
    img.setAttribute("src", "../public/images/secret.jpg");
    img.setAttribute("id", "secret");

    container.innerHTML = "Encontre a foto!"
    container.appendChild(img);

    document.getElementById("secret").addEventListener("click", mostrarHistoriaParte3)
}



function mostrarHistoriaParte3()
{

    var p = document.createElement("p");
    p.textContent = "Voce encontrou a foto escondida atrás de um arvore.";

    var p2 = document.createElement("p");
    p2.textContent = "Quando juntou elas, percebeu que era a cabana que você e sua melhor amiga costumava brincar quando crianças.";

    var p3 = document.createElement("p");
    p3.textContent = "Sentiu uma certa nostalgia e ficou vagando em suas memórias até que se lembrou da mensagem";

    var p4 = document.createElement("p");
    p4.textContent = "Olhou atrás da foto e viu o restante";

    var p5 = document.createElement("p");
    p5.textContent = "'Venha me encontrar na cabana'";

    var p6 = document.createElement("p");
    p6.textContent = "Você pensou e foi até lá.";

    var p6 = document.createElement("p");
    p6.textContent = "Quando você chegou estava tudo muito escuro e o silencio era assustador.";

    var p7 = document.createElement("p");
    p7.textContent = "Mas ainda assim, voce foi adiante. Assim que voce colocou o pé dentro da cabana.";

    var p8 = document.createElement("p");
    p8.textContent = "Todos gritaram 'Surpresa!'. Seus amigos haviam preparado uma grande surpresa para você";

    switch(contador)
    {
        case 1:
            container.appendChild(p);
            break;

        case 2:
            container.appendChild(p2);
                break;

            case 3:
                container.appendChild(p3);
                break;

            case 4:
                container.appendChild(p4);
                break;
            
            case 5:
                container.appendChild(p5);
                break;
            
            case 6:
                container.appendChild(p6);
                break;
            
            case 7:
                container.appendChild(p7);
                break;
    
                case 8:
                    container.appendChild(p8);
                    break;
            default:
                break;
        }

        if(contador < 8)
        {
            setTimeout(function()
            {
                contador++;
                mostrarHistoriaParte3(contador);

        
            }, 2000)
        }
        else
        {
            alert("Muito obrigada por jogar!")
        }
}