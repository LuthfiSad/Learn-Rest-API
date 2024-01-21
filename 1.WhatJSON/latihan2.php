<?php
$data = file_get_contents('coba.json');
// mengubah json menjadi object / array jika ada true
$mahasiswa = json_decode($data, true);
var_dump($mahasiswa);
echo $mahasiswa[0]["pembimbing"]["pembimbing1"];
