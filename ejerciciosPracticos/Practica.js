//Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo(){
    console.log("¡Holaaaaaa Mundooo!");
}
//Ejecucion
holaMundo();
//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function holaMundoConNombre(nombre){
    console.log(`¡Holaaaa , ${nombre}!!!!`)
}
//Ejecucion
holaMundoConNombre("Kevin Lamilla");
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function numeroDoble(numero){
    return numero * 2;
}

//Ejecucion
console.log(numeroDoble(10));
//Crear una función que reciba tres números como parámetros y devuelva su promedio.

function numerosPromedios(a,b,c){
    let suma =  a+b+c;
    return suma/3;
}

//Ejecucion
console.log(numerosPromedios(10,20,30));
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numeroMayor(a,b){
    return Math.max(a,b);
}

//Ejecucion
console.log(numeroMayor(10,30));
//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function numeroAlCuadrado(num){
    return num * num;
}

//ejecucion
console.log(numeroAlCuadrado(10));