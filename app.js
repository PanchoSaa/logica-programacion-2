/*let titulo=document.querySelector(`h1`);
titulo.textContent=`juego del número secreto`;
let parrafo=document.querySelector(`p`);
parrafo.innerHTML=`Indica un número del 1 al 10`;*/

let numeroSecreto=generarNumeroSecreto();
let intentos=1;
let listaNumerosSorteados=[];
let numeroMaximo =10;
function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;

};
function condicionesIniciales(){
    asignarTextoElemento(`h1`,`juego del número secreto`);
    asignarTextoElemento(`p`,`indica un número del 1 al ${numeroMaximo}`);
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
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    // si ya sorteamos todos los números posibles
    if (listaNumerosSorteados.length==numeroMaximo) {
      asignarTextoElemento('p','ya se sortearon todos los números posibles');
    } else {
      
    
    // Si el numero generado esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return(generarNumeroSecreto);
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return(numeroGenerado);
    }
    }
}
