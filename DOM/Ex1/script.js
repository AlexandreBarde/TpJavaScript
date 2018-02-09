/*
Utilisez les 2 approches suivantes :
monelement.style.visibility = 'visible'|'hidden'
monelement.style.display = ""|"none".

Quelle est la différence entre ces 2 méthodes ?

La différence entre ces 2 méthodes est que l'une permet de juste cacher l'élément sur la page
et la seconde méthode permet de supprimer l'élément sur la page en enlevant son emplacement.
 */

function cacherElementVisibility(id)
{
    document.getElementById(id).style.visibility = "hidden";
}

function afficherElementVisibility(id)
{
    document.getElementById(id).style.visibility = "visible";
}

function cacherElementDisplay(id)
{
    document.getElementById(id).style.display = "none";
}

function afficherElementDisplay(id)
{
    document.getElementById(id).style.display = "block";
}