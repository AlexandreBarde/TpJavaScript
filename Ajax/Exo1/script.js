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


function checkAuteur()
{
    document.getElementById('livres').options.length=0;
    var e = document.getElementById('auteurs');
    var value = e.options[e.selectedIndex].value;
    var xhr = getXhr();
    xhr.onreadystatechange = function ()
    {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            listeLivres = xhr.responseText.split("\n");
            livresSelect = document.getElementById('livres');
            for (var i = 0; i < listeLivres.length; i++)
            {
                var opt = document.createElement('option');
                opt.value = i;
                opt.innerHTML = listeLivres[i];
                livresSelect.appendChild(opt);
            }

        }
    };
    xhr.open("GET", "ajax.php?id=" + value, true);
    xhr.send(null);
}
