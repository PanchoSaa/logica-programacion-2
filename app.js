/*let titulo=document.querySelector(`h1`);
titulo.textContent=`juego del número secreto`;
let parrafo=document.querySelector(`p`);
parrafo.innerHTML=`Indica un número del 1 al 10`;*/

let numeroSecreto=generarNumeroSecreto();
let intentos=1;

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;

};
function condicionesIniciales(){
    asignarTextoElemento(`h1`,`juego del número secreto`);
    asignarTextoElemento(`p`,`indica un número del 1 al 10`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

condicionesIniciales();

function verificarIntento(){
  let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
  console.log(intentos);
  if(numeroSecreto===numeroDeUsuario){
    asignarTextoElemento(`p`,`Acertaste el número en ${intentos} ${(intentos===1)? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else{
    if(numeroSecreto<numeroDeUsuario){
        asignarTextoElemento(`p`,`el número secreto es menor`);

  } else{
    asignarTextoElemento(`p`,`el número secreto es mayor`);
  }
  intentos++;
  limpiarCaja();
}
  return;
}

function limpiarCaja(){
    document.querySelector(`#valorUsuario`).value='';
    
}
 function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervlo de números
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');

 }

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}
