function checkFormulaire()
{
    if(document.getElementById('champ').value === "")
    {
        document.getElementById('erreur').innerHTML = "Hop hop hop !";
        document.getElementById('erreur').style.color = "red";
        return false;
    }
    else
    {
        document.getElementById('erreur').innerHTML = "";
        return true;
    }
}