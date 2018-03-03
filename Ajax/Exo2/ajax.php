<?php
if(isset($_GET['cp']))
{

    header('Content-Type: application/json');
    try
    {
        $pdo = new PDO("mysql:host=localhost;dbname=TPAjax2", "root", "");
        $pdo->exec("SET CHARACTER SET utf8");
    }
    catch(Exception $e)
    {
        die('Erreur : ' . $e->getMessage());
    }

    $requete = 'SELECT * FROM Villes WHERE cp = :cp';
    $req = $pdo->prepare($requete);
    $req->execute(array(':cp' => $_GET['cp']));

    while($data = $req->fetch())
    {
        $donnees[] = array('nomVille' => $data['ville'], 'nomCommune' => $data['commune']);
    }
    $req->closeCursor();
    echo json_encode($donnees);
}
else
{
    echo "Erreur";
    header("Location: index.php");
}
