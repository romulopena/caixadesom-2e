//criando/declarando a função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
// chamando/invocando a função tocaSomPom
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//criando a referência constante listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//atribuindo o clique no botão "0" que é o 1º item da lista de teclas.
listaDeTeclas[0].onclick = tocaSomPom;
//criando referência variável contador, atribuindo o valor inicial como "0"
let contador = 0;
//Criando o código de repetição WHILE
while(){
    
}