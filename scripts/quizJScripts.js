    //Perguntas e respostas

    var respostasCapitalize =
    [
        "Mocha",
        "Java",
        "Microsoft",
        "ECMAScript",
        "LiveScript",
    ]

    var respostasMinuscula =
    [
        "mocha",
        "java",
        "microsoft",
        "ecmascript",
        "livescript",
    ]

    document.getElementById("verificar").addEventListener("click", checarRespostas);
    
    
    function checarRespostas()
    {
        var q1 = document.querySelector("#color1").value;
        var q2 = document.querySelector("#color2").value;
        var q3 = document.querySelector("#color3").value;
        var q4 = document.querySelector("#color4").value;
        var q5 = document.querySelector("#color5").value;

        var qtdAcertos = 0;
        var qtdErros = 0;

        if(q1 != "" && q2 != "" && q3 != "" && q4 != ""&& q5 != "" )
        {
            if(q1 === respostasCapitalize[0] || q1 === respostasMinuscula[0])
            {
                qtdAcertos++;
            }
            else
            {
                qtdErros++;
            }

            if(q2 === respostasCapitalize[1] || q2 === respostasMinuscula[1])
            {
                qtdAcertos++;
            }
            else
            {
                qtdErros++;
            }

            if(q3 === respostasCapitalize[2] || q3 === respostasMinuscula[2])
            {
                qtdAcertos++;
            }
            else
            {
                qtdErros++;
            }

            if(q4 === respostasCapitalize[3] || q4 === respostasMinuscula[3])
            {
                qtdAcertos++;
            }
            else
            {
                qtdErros++;
            }

            if(q5 === respostasCapitalize[4] || q5 === respostasMinuscula[4])
            {
                qtdAcertos++;
            }
            else
            {
                qtdErros++;
            }

            alert("Você acertou "  + qtdAcertos + ", e errou " + qtdErros);
        }
        else
        {
            alert("Voce nao pode verificar as respostas sem preencher todos os campos.");
        }
    }
