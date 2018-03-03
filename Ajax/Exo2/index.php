<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="fr">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Exo 2</title>
</head>
    <body>
        <center><h1>Ville</h1></center>
        <form action="#">
            <label for="cp">Code Postal</label>
            <input id="cp" type="text">
            <br />
            <div id="villeDIV">
                <label for="ville">Ville</label>
                <input id="ville" type="text">
            </div>
            <br />
            <label for="dep">Département</label>
            <input id="dep" type="text">
        </form>
        <p id="erreur" style="color: darkred">Ce n'est pas un nombre !</p>
        <script src="script.js"></script>
    </body>
</html>
