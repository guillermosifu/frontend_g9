// while tabie no sirve para poder hacer una acion un numero determinado de veces
// es decir un bucle

//la estuctura de while siempre va acompañado con un contador

//while (la_condicion{

//})

let contador = 0;

while(contador <= 5){
    console.log("contador", contador);
    //no se olvide del contador en cada vuelta 
    contador++;
}

// 1 => escribir un un programa que pida al usario una palabra y la muestre por pantalla 10 veces

const imprimirDiezVeces = (palabra)=>{
    let contador = 0;

    while(contador < 11){
        console.log(palabra),
        contador++;
    }
}
imprimirDiezVeces("hola grupo 9")

//  vamos a crear un programa que muestre en panbatlla la tabla de multiplicar del 1 al 10

const imprimirDiezVeces1 = (numero) =>{
    let contador = 0;
    while(contador <= 10){
        console.log(numero * contador);
        contador++;
    }
};

imprimirDiezVeces1(5)