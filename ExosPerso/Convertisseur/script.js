document.getElementById('francsEuros').addEventListener("keyup", francsToEuros);
document.getElementById('eurosFrancs').addEventListener("keyup", eurosToFrancs);

function francsToEuros()
{
    document.getElementById('euros').innerHTML = "Franc(s) => " + toEuros(document.getElementById('francsEuros').value) + " Euros";
}

function eurosToFrancs()
{
    document.getElementById('francs').innerHTML = "Euro(s) => " + toFrancs(document.getElementById('eurosFrancs').value) + " Francs";
}

function toEuros(francs)
{
    return francs / 6.55957;
}

function toFrancs(euros)
{
    return euros * 6.55957;
}