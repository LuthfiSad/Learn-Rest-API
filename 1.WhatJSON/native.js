// untuk mengubah json menjadi array pada javascript ajax
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let mahasiswa = JSON.parse(this.responseText);
        console.log(mahasiswa);
    }
}
// true untuk asyncronous, false untuk Syncronous
xhr.open('GET', 'coba.json', true);
xhr.send();