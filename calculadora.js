
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function back()
{
    verresultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = substring(0, resultado.length)
}

function calcular()
{
    verresultado = document.getElementById('resultado').innerHTML
    if (resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada para calcular"
    }
}
