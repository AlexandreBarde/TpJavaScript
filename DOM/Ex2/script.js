// obtenir une référence du noeud parent du tableau HTML, appelé "tab"
var tab = document.getElementById('tab');

// placer le gestionnaire d'évènements sur tab, qui contient toutes les cellules
tab.ondblclick=function(e)
{
    // obtenir la référence vers l'élément sélectionné dans la tableau html
    var td = e.target;
    // obtenir le type de l'élément qui a reçu l'événement
    var type = td.nodeName;
    // pour vérifier : alert(type);
    // est-ce bien une balise TD ? en effet, la suite du traitement
    // ne doit s'appliquer qu'à une balise TD !
    if (type === 'TD')
    {
        // récupérer le texte de la cellule
        var txt = td.innerHTML;

        // créer un noeud élément de type input
        var input = document.createElement("input");
            // et lui donner comme value le texte
        input.value = txt;

        // remplacer dans le tableau le noeud texte de la cellule par le noeud input
        td.parentNode.replaceChild(input, td);

        // mettre le focus et sélectionner la ligne d'édition input
        input.focus();
        input.select();

        // quand on quitte le champ d'édition
        input.onblur = function()
        {
            // récupérer la valeur saisie à ce moment
            var val = input.value;
            // et la placer directement dans la cellule
            td.innerHTML = val;

            // supprimer le champ input inutile
            //input.remove();
            input.parentNode.replaceChild(td, input);
        }
    }
};
