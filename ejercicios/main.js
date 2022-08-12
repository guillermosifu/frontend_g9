
function CallMenu(){
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares")
    );
    if (isNaN(nro_ejercicio)){
        alert("porfavor ingresa valores numericos");
    }else{
        MenuEjercicios(nro_ejercicio)
    }
}

function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("ingrese el valro 1 a sumar:"));
            let valor2 = parseFloat(prompt("ingrese el valro 2 a sumar:"));
            alert(ej1_sumarValores(valor1,valor2));
          break;

        case 2  :
            let ex1 = parseFloat(prompt("ingrese la primera nota:"));
            let ex2 = parseFloat(prompt("ingrese la segunda nota:"));
            let ex3 = parseFloat(prompt("ingrese la tercera nota:"));
            let ex4 = parseFloat(prompt("ingrese la cuarta nota:"));
            alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4))
      break;

      case 3 :
      let base_rect =  parseFloat(prompt("ingrese la base del recatngulo"));     
      let altura_rect =  parseFloat(prompt("ingrese la altura del recatngulo"));
      alert(ej3_CalcularAreaReactangulo(base_rect,altura_rect))
      break;

     case 4 :
      let base = parseFloat(prompt("ingrese la base del rectangulo"));
      let altura =parseFloat(prompt("ingrese laaltura"));
      alert(ej4_CalcularAreaTriangulo(base,altura))

      break;

      case 5 :
        let radio = parseFloat(prompt("ingrese radio del circulo"));
        alert(ej5_CalcularRadioCircul(radio))
        break;

      case 6:
        let salario_hora= parseFloat(prompt("ingrese el salario x hora"));
        let horas = parseFloat(prompt("ingrese la horas trabajadas"));
        alert(ej6_CalcularSalario(salario_hora,horas)) 



    }

}



function ej1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return" porfavor ingrese valores";
    }else{
        return a + b;
    }
}

function ej2_calcularPromedio(ex1,ex2,ex3,ex4){
    if(isNaN (ex1) || isNaN(ex2)|| isNaN(ex3) || isNaN(ex4)){
        return "porfavor ingresa valores";
    } else{
        return (ex1 + ex2 + ex3 + ex4) /4 ;
    }
    
}

function ej3_CalcularAreaReactangulo(base_rect,altura_rect){
    if(isNaN(base_rect) || isNaN(altura_rect) ){
        return "ingresa valores numericos"
    } else{
        return "el area del rectangulo es :" +base_rect * +altura_rect;
    }

}


function ej4_CalcularAreaTriangulo(base,altura){
    if(isNaN(base) || isNaN(altura) ){
        return "ingresa valores numericos"
    } else{
        return "el area del traiangulo es :" + (base * altura) /2 ;
    }

}

function ej5_CalcularRadioCirculo(radio){
    if(isNaN(radio)){
        return "ingrese el radio"
    }else{
        const pi = 3.14
        return "el area del circulo es :" + pi * (radio * radio)
    }
}

function ej6_CalcularSalario(salario, horas) {
    let resultado = "";
    let limite = 40;
    if (isNaN(salario) || isNaN(horas)) {
      return "Por favor ingrese valores numericos";
    } else {
      if (horas > limite) {
        resultado =
          "Solo se pagaran " +
          limite +
          " horas semanales. Su salario es : " +
          salario * limite;
      } else if (horas > 0 && horas <= limite) {
        resultado = "Su salario es :" + salario * horas;
      }
      return resultado;
    }
  }