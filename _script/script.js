//SLIDE DE FOTOS
var arrayFotos = ['_imagens/foto1.jpg','_imagens/foto2.jpg','_imagens/foto3.jpg','_imagens/foto4.jpg','_imagens/foto5.jpg'];
var foto = 0;
var painelFoto = document.querySelector(".fotoPainel");

function trocaFoto () {
    painelFoto.src=arrayFotos[foto];
    painelFoto.setAttribute("style","opacity=1");
    foto += 1;
    if (foto == 5) {
        foto = 0;
    } 
}
setInterval(trocaFoto, 3000);

