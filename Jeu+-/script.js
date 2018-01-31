var nombreAleatoire = getAleatoireNombre(1, 1024);

console.log(nombreAleatoire);

function checkNombre()
{
    champ
    if(is_numeric(document.getElementById('nombre').value))
    {
        var nombre = document.getElementById('nombre').value;
        if(nombre < nombreAleatoire)
        {
            document.getElementById('indice').style.color = "orange";
            document.getElementById('indice').innerHTML = "Trop petit !";
        }
        else if(nombre > nombreAleatoire)
        {
            document.getElementById('indice').style.color = "orange";
            document.getElementById('indice').innerHTML = "Trop grand !";
        }
        else
        {
            document.getElementById('indice').style.color = "lime";
            document.getElementById('indice').innerHTML = "Bravo !!";
        }
    }
    else
    {
        document.getElementById('indice').style.color = "red";
        document.getElementById('indice').innerHTML = "Ce n'est pas un nombre !";
    }
}

function is_numeric(chaine)
{
    var exp=new RegExp("^[0-9]*$","g");
    return exp.test(chaine);
}


function getAleatoireNombre(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}