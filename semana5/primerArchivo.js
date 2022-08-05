const numero1 = 10;
const numero2 = 20;



// recuerden el ; no importa
let resultado = 0;

resultado = numero1 + numero2;

// recuerden
// alert : Es una alerta en el navegador
// console.log : Escribe un mensaje en la consola del navegador
// Resultado: 10 + 20 = 30
// ojo el simbolo + tiene 2 propositos
// 1. Suma siempre cuando sea numeros
// 2. Concatenacion peros si son strings junto a numbers lo que hace es concatenar
// console.log("Resultado: " + numero1 + " + " + numero2 + " = " + resultado);

// otra propiedad del console.log poder darle un key a un valor
// console.log("Sumatoria:", resultado);

// Existe el console.error y console.warn
// el console.error es para errores
// el console.warn es para advertencias
console.error("Suma Error:", resultado);

resultado = numero1 - numero2;
console.warn("Resultado: ", resultado);

//vamos hacer una calculadora
//prompt = es una ventana emergente que nos pide un valor 
//esto abre una ventana tipo alert! 
//el valor que ingresamos se guarda en una variable 


//necesito que el usuario ingrese el tipo de operacion

let valor1 = prompt("ingresa valor 1");
let valor2 =  prompt("ingresa valor 2");

const operacion = prompt("ingrese su operacion que puede se + - * /");

let resultadoCalculadora= 0;

//para poder hacer calculos debo convertir mi variable de string a number 
//parseInt : convertir un string en number 
//+ = delante de la variable y esta se convierte en number ;

if(operacion ==="+"){
    resultadoCalculadora = +valor1 + +valor2;
    console.log("resultado",resultadoCalculadora);
}else if(operacion ==="-"){
    resultadoCalculadora= +valor1 -+valor2
    console.log("resultado",resultadoCalculadora)
}else if(operacion=== "*"){
    resultadoCalculadora= +valor1 * +valor2;
    console.log("la multiplicacion es :" , resultadoCalculadora)
}
// hay un paso extra para la division 
else if(operacion === "/"){
    if(+valor2 !== 0){
        resultadoCalculadora = +valor1 / +valor2;
        console.log("es el resultado" , resultadoCalculadora)
    } else{
        console.warn("el divisor deber ser distinto a 0")
    }
} else{
    console.error("operacion no valida")
}


/// Haremos un algoritmo para poder detectar si un numero es par o impar
const numeroMultiplo = 12;

// la forma en la que pueda saber si un numero es par es usando %
// porque es una operacion que brinda el residuo

// mod = %
if (numeroMultiplo % 2 === 0) {
  console.log("Numero par", numeroMultiplo);
}

if (numeroMultiplo % 3 === 0) {
  console.log("Numero multiplo de 3", numeroMultiplo);
}


// haremos un algoritmo que pida numeros
//usando prompt me imprima el numero mayor 
const numeroOne = prompt("ingresa un numero1");
const numeroTwo = prompt("ingresa un numero2");

