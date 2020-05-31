<?php
/**
 * Récupérer les données transmises par le formulaire
 */
$data = file_get_contents("php://input");
$js = json_decode($data);
$fichier = 'profil_'.$js->id.'@'.$js->mdp.'.json';

$msg = array('msg'=>'');
/**
 * C'est du PHP, il faut afficher les erreurs
 */
ini_set('track_errors', 1);

$contenu = file_get_contents("../data/id/".$fichier);

echo $contenu;
