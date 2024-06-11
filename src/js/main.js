// Váriaveis - início
let texto = document.getElementById("apresentacao-texto-2");
let barra = document.getElementById("barra-principal");
let conteudoPrincipal = document.getElementById("conteudo-principal");
// Váriaveis - fim


// Função para mostrar o texto 2 da seção "Sobre nós" - início
function btnLermais(){

    texto.style.display =  'block';
    conteudoPrincipal.style.height = '700px';


}
// Função para mostrar o texto 2 da seção "Sobre nós" - fim

// Função para tirar o texto 2 da seção "Sobre nós" - início
function btnLermenos(){

    texto.style.display = 'none';
    conteudoPrincipal.style.height = '500px';

}
// Função para tirar o texto 2 da seção "Sobre nós" - fim