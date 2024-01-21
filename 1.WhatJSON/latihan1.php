<?php
// array assosiative
$mahasiswa1 = [
    [
        "nama" => "Muhamad Luthfi Sadli",
        "umur" => 18,
        "nrp" => "023143541",
        "email" => "lutpai@gemink.com"
    ],
    [
        "nama" => "Muhamad Luthfi Sadli",
        "umur" => 18,
        "nrp" => "023143541",
        "email" => "lutpai@gemink.com"
    ]
];

// mengubah array menjadi json
$data1 = json_encode($mahasiswa1);
echo $data1;


// ambil dari database
// database menjadi array dan mengubah ke json

// config to mysql with pdo(php data objects)
$dbh = new PDO('mysql:host=localhost;dbname=crud_ktp', 'root', '');
// penyiapan query
$db = $dbh->prepare('SELECT * FROM users');
// jalankan query
$db->execute();
// ambil mahasiswanya menggunakan array associative
$mahasiswa2 = $db->fetchAll(PDO::FETCH_ASSOC);

// mengubah array menjadi json
$data2 = json_encode($mahasiswa2);
echo $data2;
