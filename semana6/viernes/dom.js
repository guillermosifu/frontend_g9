// EXISTE DENTRO DE JS EL DOCUMENT , ES UN ATRIBUTO DE JS ME VA PERMITIR OBETNER ELEMENTOD DEL HTML 
//OBETENIDEDNO EL ELEMENTO POR ID . TAG, CLASE
//<H1> TAG
// NOMBRE = CLASE
// ID = VALOR UNICO

//tengo 3 elemento con el tagname INPUT
// byId  byClass 

const inputs=document.getElementsByTagName("input")
console.log("inputs", inputs)


// recordemos que un input HTMLcolletion , pero  para poder iterarlos debeo convertirlo en un array nornaml

const newInputs = Array.from(inputs);
console.log("newInputs", newInputs)

// Otra forma de acceder a los elementos del DOM es utilizando el ID
//  * TODO: Recuerden que podemos asignarle un id a cualquier elemento de nuestro HTML

const div = document.getElementById("container")

const newDiv = Array.from(div)
console.log("div", newDiv)

// querySelector y querySelectoAll 
//los hermanod menos de los demas mtodos


const password = document.querySelectorAll("#pass")
console.log(password.value)


const inputEmail = document.getElementById("input_email")

inputEmail.style.backgroundColor ="green"


// vamos obtener elemento de clases

const inputsName = document.getElementsByClassName("input_name");

console.log(inputsName);
const newInputsName = Array.from(inputsName);
newInputsName.forEach((input) => {
  console.log(input.value);
});


