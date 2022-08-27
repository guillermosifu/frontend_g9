
function imprimir(){

    console.log("hola grupo 9 desde js")
}


function calculadorHTML (operacion){
//obtengo el valor del input

    const numero1 = document.querySelector("#numero1")    
    const numero2 = document.querySelector("#numero2")
    //validar que los datos no esten vacios

    if(numero1 === "" || numero2 === ""){
        alert("debes completar los datos");
        return;
    }

    // una vez que valida los datos debo halla la operacion 
    //necesito una variable que se encargue de guardar el resultado

    let resultado = 0;
    if (operacion ==="+"){
        resultado = sumar(numero1,numero2);
    }
    if(operacion ==="-"){
        resultado = restar(numero1,numero2);
    }
    if(operacion === "*"){
        resultado = multiplicar(numero1,numero2)
    }
    if(operacion ==="/"){
        resultado = dividir(numero1,numero2)
    }

    //para acabra debo mostrar el resulatdo en mi HTML
    const p = document.createElement("p");
    const value = document.createTextNode(resultado);
    p.appendChild(value);
    const contenedor= document.querySelector("#resultado") ;
    contenedor.appendChild(p)


}