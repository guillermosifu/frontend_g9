const optionMode = document.querySelector("#option-mode");
//por que trareria al body tambien?
const body = document.querySelector("body")

//vamos usar el evento onchange para poder obtener el valor del select 

optionMode.onchange = function (event){

const{value} = event.target;
console.log(value)


body.setAttribute("data-mode",value);
    
}

//la fucncion matchMEdia detecta en modo que eesta nuestro disposiivo
if(
    window.matchMedia &&
    window.matchMedia ("(prefers-color-sheme:dark)").matches
){
    //dark mode
    body.setAttribute("data-mode", "dark")
}else{
    body.setAttribute("data-mode","light")
}
