
<?php
$a = array('<foo>',"'bar'",'"baz"','&blong&', "\xc3\xa9");

echo "Normal : ",  json_encode($a), "\n";
echo "Tags : ",    json_encode($a, JSON_HEX_TAG), "\n";
echo "Apos : ",    json_encode($a, JSON_HEX_APOS), "\n";
echo "Quot : ",    json_encode($a, JSON_HEX_QUOT), "\n";
echo "Amp : ",     json_encode($a, JSON_HEX_AMP), "\n";
echo "Unicode : ", json_encode($a, JSON_UNESCAPED_UNICODE), "\n";
echo "Toutes : ",     json_encode($a, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE), "\n\n";

$b = array();

echo "Tableau vide sous forme de tableau : ", json_encode($b), "\n";
echo "Tableau vide sous forme d'objet : ", json_encode($b, JSON_FORCE_OBJECT), "\n\n";

$c = array(array(1,2,3));

echo "Tableau non-associatif sous forme de tableau : ", json_encode($c), "\n";
echo "Tableau non-associatif sous forme d'objet : ", json_encode($c, JSON_FORCE_OBJECT), "\n\n";


$d = array('foo' => 'bar', 'baz' => 'long');

echo "Tableau associatif affiché comme objet: ", json_encode($d), "\n";
echo "Tableau associatif affiché comme objet: ", json_encode($d, JSON_FORCE_OBJECT), "\n\n";
?>
