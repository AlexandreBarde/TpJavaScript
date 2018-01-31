var tab = [-2, 1, 4];

function soustrait(x)
{
    if(x - 2 <= 0)
    {
        return "Résultat négatif ou nul !";
    }
    else
    {
        return "Résultat positif"
    }
}

function affiche()
{
    for(var i = 0; i < tab.length; i ++)
    {
        alert(soustrait(tab[i]));
    }
}