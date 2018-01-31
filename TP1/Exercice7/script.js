testWhile();

function testWhile()
{
    var phrase = prompt("Début de la phrase ? Elle doit commencer par \"");
    while(!phrase.startsWith("\""))
    {
        phrase = prompt("Début de la phrase ? Elle doit commencer par \"");
    }

    while(!phrase.endsWith("\""))
    {
        phrase += prompt("Suite de la phrase .. Pour la finir : \"");
    }

    alert(phrase);

}