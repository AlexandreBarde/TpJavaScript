document.getElementById("texte").addEventListener("click", functionClick);
document.getElementById("texte").addEventListener("mouseover", functionMouseOver);
document.getElementById("texte").addEventListener("dblclick", functionDoubleClick);

function functionClick()
{
    this.style.color = "yellow";
}

function functionMouseOver()
{
    this.style.color = "red";
}

function functionDoubleClick()
{
    this.style.color = "lime";
}
