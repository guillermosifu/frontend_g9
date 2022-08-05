// que es una funcion?
// una funcion es un conjunto de soluciones para poder 
//realizar tarea o ejecucion


function nombreFuncion(){
    //una vez declarada mi funcion todo el codigo que haga dentro
    // esta solo se va ejecutar cuando llame a la funcio creada 

    console.log("nombre funcion")
}

// para llamar a una funcion debo hacerlo con el nombre y parentesis luego dle nombre 
nombreFuncion();

//una fuicnion es creada para poder reutilizar codigo 
// una de las misisione de la funcion es hacer un trabajo repetitvo 
//  solo necesito escribir el odigo una solavez 



// funcion declarativa
function sumar (a,b,y){
return a+b-y 
 }


console.log("sumar",sumar(100,20,10));

//funcion de exprexion
let sumar2= function(a,b){
    return a+b
}

console.log("resultado",sumar2(10,10)) 

//funcion flecha
const sumar3 =(a,b,y)=>{
   return a+b-y
}
console.log("resulatdo",sumar3(5,5,2))