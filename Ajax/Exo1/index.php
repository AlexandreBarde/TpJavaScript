<?php

    try
    {
        $pdo = new PDO("mysql:host=localhost;dbname=TPAjax", "root", "");
        $pdo->exec("SET CHARACTER SET utf8");
    }
    catch(Exception $e)
    {
        die('Erreur : ' . $e->getMessage());
    }

    $requete = 'SELECT * FROM Auteur';

    $req = $pdo->prepare($requete);
    $req->execute();
    
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Exo 1</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
</head>
<body>
        <select id="auteurs" name="Nom" onchange="checkAuteur();" size="1">
            <?php
                while($data = $req->fetch())
                {
                    echo "<option value=\"" . $data['id'] . "\">" . $data['nom'] . "</option>";
                }
                $req->closeCursor();
            ?>
        </select>
        <select id="livres" name="Livres">

        </select>
        <script src="script.js"></script>
</body>
</html>
