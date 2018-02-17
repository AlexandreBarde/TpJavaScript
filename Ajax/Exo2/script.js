document.getElementById('cp').addEventListener("onblur", checkCodePostal);

function checkCodePostal()
{
    var xhr = getXhr();
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            listeVilles = xhr.responseText.split("\n");
        }
    }
}

function getXhr()
{
    var xhr = null;
    if(window.XMLHttpRequest)
        xhr = new XMLHttpRequest();
    else if (window.ActiveXObject)
    {
        try
        {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    else
    {
        alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest");
        xhr = false ;
    }
    return xhr;
}