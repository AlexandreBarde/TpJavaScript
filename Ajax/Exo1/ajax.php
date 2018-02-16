<?php

if(isset($_GET['id']))
{
    try
    {
        $pdo = new PDO("mysql:host=localhost;dbname=TPAjax", "root", "");
        $pdo->exec("SET CHARACTER SET utf8");
    }
    catch(Exception $e)
    {
        die('Erreur : ' . $e->getMessage());
    }

    $requete = 'SELECT * FROM Livre WHERE auteurID = :id';
    $req = $pdo->prepare($requete);
    $req->execute(array(':id' => $_GET['id']));

    $nombreLivres = $req->rowCount();

    $countLivres = 0;

    while($data = $req->fetch())
    {
        $countLivres++;
        if($countLivres == $nombreLivres)
        {
            echo $data['titre'];
        }
        else
        {
            echo $data['titre'] . "\n";
        }

    }
    $req->closeCursor();
}
else
{
    echo "Erreur";
    header("Location: index.php");
}