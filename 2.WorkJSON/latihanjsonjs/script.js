function tampilkanSemuaMenu(){
    $.getJSON("../pizza.json", function (data) {  
            let menu = data.menu;
            // With Jquery
            $.each(menu, function (i, data) { 
                $('#daftar-menu').append(`<div class="col-md-4 mb-3">
                <div class="card">
                    <img src="../img/pizza/${data.gambar}" class="card-img-top" />
                    <div class="card-body">
                    <h5 class="card-title">${data.nama}</h5>
                    <p class="card-text">${data.deskripsi}</p>
                    <h5 class="card-title">Rp. ${data.harga}</h5>
                    <a href="#" class="btn btn-danger">Pesan Sekarang</a>
                    </div>
                </div>
                </div>`)
            });

            // // Not Vanilla JavaScript
            // menu.forEach(data => {
            //     let row = document.querySelector("#daftar-menu");
            //     row.innerHTML += `<div class="col-md-4 mb-3">
            //     <div class="card">
            //         <img src="../img/pizza/${data.gambar}" class="card-img-top" />
            //         <div class="card-body">
            //         <h5 class="card-title">${data.nama}</h5>
            //         <p class="card-text">${data.deskripsi}</p>
            //         <h5 class="card-title">Rp. ${data.harga}</h5>
            //         <a href="#" class="btn btn-danger">Pesan Sekarang</a>
            //         </div>
            //     </div>
            //     </div>`;
            // });
        }
    )
}
tampilkanSemuaMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    let kategori = $(this).html();
    $('h1').html(kategori);

    if(kategori == "All Menu"){
        tampilkanSemuaMenu();
    }

    $.getJSON("../pizza.json", function (data) {  
        let menu = data.menu;
        let content = '';
        $.each(menu, function (i, data) { 
            if(data.kategori == kategori.toLowerCase()){
                content += `<div class="col-md-4 mb-3">
                <div class="card">
                    <img src="../img/pizza/${data.gambar}" class="card-img-top" />
                    <div class="card-body">
                    <h5 class="card-title">${data.nama}</h5>
                    <p class="card-text">${data.deskripsi}</p>
                    <h5 class="card-title">Rp. ${data.harga}</h5>
                    <a href="#" class="btn btn-danger">Pesan Sekarang</a>
                    </div>
                </div>
                </div>`
            }
        });
        $('#daftar-menu').html(content);
    }
);
})