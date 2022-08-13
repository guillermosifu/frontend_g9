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


const div = document.getElementById("container")

const nweDiv = Array.from(div)
console.log("div", div)

// querySelector y querySelectoAll 
//los hermanod menos de los demas mtodos


const password = document.querySelector("#pass")
console.log(password.value)

const input = document.querySelector("input")
console.log(input)

