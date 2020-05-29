<?php
/**
 * Récupérer les données transmises par le formulaire
 */
$data = file_get_contents("php://input");
$js = json_decode($data);

$msg = array('msg'=>'');

// $invalid_characters = array("$", "..", "#", "<", ">", "|");
// $str = str_replace($invalid_characters, "", $str);

/**
 * C'est du PHP, il faut afficher les erreurs
 */
ini_set('track_errors', 1);

/**
 * Ouverture du fichier fromages.json
 * @param {string} 1 - L'adresse du fichier (attention, vérifiez vos droits www-data sur votre serveur (chown -R www-data:www-data ./modele))
 * @param {string} w - le fichier est ouvert en écriture seulement
 */
$fJson = fopen('../data/id/joueurs.json', 'w');
if ( !$fJson ) {
  $msg['msg'] = "'fopen raté. Raison : ', $php_errormsg";
  
}
/**
 * Ecriture des données dans le fichier ouvert
 */
if(fwrite($fJson, $data)){
    $msg['msg'] = "Données sauvegardées";
}else{
    $msg['msg'] = "Attention, une erreur s'est produite dans l'insertion";  
}

echo json_encode($msg);
/**
 * Fermeture du fichier
 */
fclose($fJson);
