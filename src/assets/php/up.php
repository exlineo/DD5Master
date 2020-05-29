<?php
$target_dir = "../partage/";
$target_file = $target_dir . basename($_FILES["fichierPartage"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $tmp_fiche = $_FILES["fichierPartage"]["tmp_name"];
    $ext = pathinfo($tmp_fiche, PATHINFO_EXTENSION);
    $check = getimagesize($tmp_fiche);
    if($check !== false) {
        echo "Chargement d'une image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "Attenion, fichier déjà existant.";
  $uploadOk = 0;
}

// Check file size
if ($_FILES["fichierPartage"]["size"] > 500000) {
  echo "Taille de fichier trop important.";
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fichierPartage"]["tmp_name"], $target_file)) {
    echo "The file ". basename( $_FILES["fichierPartage"]["name"]). " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
