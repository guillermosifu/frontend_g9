function validarSiEsNumero(numero, tipo) {
    return isNaN(numero) ? `mensaje Error : no se puedes ${tipo}`: numero
}

function sumar (numero1 , numero2){

const suma = +numero1 + +numero2 ;

return validarSiEsNumero(suma,"sumar")

}

function restar (numero1 , numero2){
    const calcResta = +numero1 - +numero2 ;
    return validarSiEsNumero(calcResta ,"restar")
}


function multiplicar(numero1, numero2){
    const calcMultiplicar= +numero1 * +numero2;
    return validarSiEsNumero(calcMultiplicar, "multiplicar")
}
function dividir(numero1, numero2){
if(+numero2 === o){
    return "Error no se puede divir entre 0"
}
    
    const calcDividir= +numero1 / +numero2;
    return validarSiEsNumero(calcDividir, "dividir")
}