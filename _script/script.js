//SLIDE DE FOTOS
var arrayFotos = ['_imagens/foto1.jpg','_imagens/foto2.jpg','_imagens/foto3.jpg','_imagens/foto4.jpg','_imagens/foto5.jpg'];
var foto = 0;
var painelFoto = document.querySelector(".fotoPainel");

function trocaFoto () {
    painelFoto.src=arrayFotos[foto];
    trocaPainel(foto);
    foto += 1;
    if (foto == 5) {
        foto = 0;
    }
}

setInterval(trocaFoto, 3000);

function trocaPainel(foto){
    
    switch (foto) {
        case 0:
            $("#foto.foto5").css("opacity",'.2');
            $("#foto.foto1").css("opacity",'1');
            break;
        case 1:
            $("#foto.foto1").css("opacity",'.2');
            $("#foto.foto2").css("opacity",'1');
            break;
        case 2:
            $("#foto.foto2").css("opacity",'.2');            
            $("#foto.foto3").css("opacity",'1');
            break;
        case 3:
            $("#foto.foto3").css("opacity",'.2');
            $("#foto.foto4").css("opacity",'1');
            break;
        case 4:
            $("#foto.foto4").css("opacity",'.2');
            $("#foto.foto5").css("opacity",'1');
    }

}

