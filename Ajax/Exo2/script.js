document.getElementById('cp').addEventListener("blur", checkCodePostal);
document.getElementById('erreur').style.visibility = "hidden";

function checkCodePostal()
{
    var codePostal = document.getElementById('cp').value;
    var xhr = getXhr();
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            if(!is_numeric(document.getElementById('cp').value))
            {
                console.log("erreur");
                document.getElementById('erreur').style.visibility = "visible";
                document.getElementById('cp').style.borderStyle = 'solid';
                document.getElementById('cp').className = 'test';
            }
            else
            {
                document.getElementById('cp').className = '';
                document.getElementById('erreur').style.visibility = "hidden";
                document.getElementById('cp').style.borderStyle = '';
                document.getElementById('cp').style.borderColor = '';
                var json = JSON.parse(xhr.responseText);
                var nombreVilles = json.length;
                if(nombreVilles > 1)
                {
                    if(document.getElementById('villeDIV').contains(document.getElementById('ville')))
                    {
                        document.getElementById('ville').remove();
                        console.log("delete ville");
                    }
                    if(document.getElementById('villeDIV').contains(document.getElementById('villes')))
                    {
                        var villesElement = document.getElementById('villes');
                        villesElement.options.length = 0;
                    }
                    else
                    {
                        var element = document.createElement('select');
                        element.id = "villes";
                        document.getElementById('villeDIV').appendChild(element);
                        document.getElementById('villes').options.length = 0;
                    }
                    listeVilles = document.getElementById('villes');
                    for (var i = 0; i < nombreVilles; i++)
                    {
                        var opt = document.createElement('option');
                        opt.value = i;
                        opt.innerHTML = json[i].nomVille;
                        listeVilles.appendChild(opt);
                    }
                }
                else
                {
                    if(document.getElementById('villeDIV').contains(document.getElementById('villes')))
                    {
                        document.getElementById('villes').remove();
                        console.log("delete villes");
                    }
                    if(!document.getElementById('villeDIV').contains(document.getElementById('ville')))
                    {
                        var element2 = document.createElement('input');
                        element2.id = "ville";
                        document.getElementById('villeDIV').appendChild(element2);
                    }
                    document.getElementById('ville').value = json[0].nomVille;
                }

                document.getElementById('dep').value = json[0].nomCommune;
            }
        }
    };
    xhr.open("GET", "ajax.php?cp=" + codePostal, true);
    xhr.send(null);
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

function is_numeric(chaine)
{
    var exp=new RegExp("^[0-9]*$","g");
    return exp.test(chaine);
}
