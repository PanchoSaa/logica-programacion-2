/*let titulo=document.querySelector(`h1`);
titulo.textContent=`juego del número secreto`;
let parrafo=document.querySelector(`p`);
parrafo.innerHTML=`Indica un número del 1 al 10`;*/

let numeroSecreto=generarNumeroSecreto();

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;

};

asignarTextoElemento(`h1`,`juego del número secreto`);
asignarTextoElemento(`p`,`indica un número del 1 al 10`);

function intentoDeUsuario(){
  alert('click desde la función');  
}
function generarNumerosecreto() {
    return Math.floor(Math.random*10)+1;
}
