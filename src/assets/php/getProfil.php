<?php
/**
 * Récupérer les données transmises par le formulaire
 */
$data = file_get_contents("php://input");
$js = json_decode($data);
$fichier = $js->id+'@'+$js->mdp+'.json';

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
$fJson = fopen("../data/id/$fichier", 'r');
if ( !$fJson ) {
  $msg['msg'] = "'fopen raté. Raison : ', $php_errormsg";
}else{
    $contenu = fread($fJson,filesize($fJson));
}

echo json_encode($contenu);
/**
 * Fermeture du fichier
 */
fclose($fJson);
