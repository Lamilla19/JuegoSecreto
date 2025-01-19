let numeroSecreto = 0;
let numIntentos= 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElementos(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function  verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    let mensajeDeIntentos = numIntentos == 1 ? "vez" : "veces";

    if(numeroSecreto === numeroDeUsuario){
       asignarTextoElementos("p",`¡Ganaste , acertaste en. ${numIntentos} ${mensajeDeIntentos}`);
       document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroSecreto > numeroDeUsuario){
            asignarTextoElementos("p","El numero secreto es mayor");
        }else{
            asignarTextoElementos("p","El numero secreto es menor");
        }
        numIntentos = numIntentos + 1;
        limpiarCaja()
    }

    return;
}

function limpiarCaja(){
   document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElementos("p","Ya se sortearon todos los numeros posibles");
        document.getElementById("intentar").setAttribute("disabled","true");
    }else{
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
           listaNumeroSorteados.push(numeroGenerado);
           return numeroGenerado; 
        }
    }
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar numero secreto
    //inicializar el numero de intentos
    condicionesIniciales()
    //Deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true")
}

function condicionesIniciales(){
    asignarTextoElementos("h1","Juego del numero Secreto!!!!!");
    asignarTextoElementos("p",`Estimado cliente , me ayuda seleccionando un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numIntentos = 1;
}

condicionesIniciales()