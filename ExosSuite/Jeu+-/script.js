var randomNumber = getRandomNumber(1, 1024);

console.log(randomNumber);

function checkNumber()
{
    var elementIndice = document.getElementById('indice');
    if(isNumeric(document.getElementById('nombre').value))
    {
        var number = document.getElementById('nombre').value;
        if(number < randomNumber)
        {
            elementIndice.style.color = "orange";
            elementIndice.innerHTML = "Trop petit !";
            resetText();
        }
        else if(number > randomNumber)
        {
            elementIndice.style.color = "orange";
            elementIndice.innerHTML = "Trop grand !";
            resetText();
        }
        else
        {
            elementIndice.style.color = "lime";
            elementIndice.innerHTML = "Bravo !!";
        }
    }
    else
    {
        elementIndice.style.color = "red";
        elementIndice.innerHTML = "Ce n'est pas un nombre !";
        resetText();
    }
}

function isNumeric(chaine)
{
    var exp = new RegExp("^[0-9]*$","g");
    return exp.test(chaine);
}

function resetText()
{
    document.getElementById('nombre').value = "";
}

function getRandomNumber(min, max)
{
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
}