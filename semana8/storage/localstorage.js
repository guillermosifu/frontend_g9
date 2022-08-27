
const btnLogin = document.querySelector("#btn-login")

btnLogin.onclick = function (event){
    event.preventDefault ();

const inputs = document.querySelectorAll("input");


inputs.forEach((input)=>{
    //localstorage.setItem(key-value)
    //--------------------------------
  console.log(inputs)
  localStorage.setItem(input.name,input.value)
    
});
login();

};


const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login(){
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    form.style.display = "none";
    usuarioSection.style.display = "block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password;
};


const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email"); 
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("#cerrar-sesion");
const usuarioSection = document.querySelector ("#usuario-logged");


if (email !== null && password !== null){
    //el usuario ya esta logeado
    //si el usario esta logeado voy ocultar el form 
   
}else{
    usuarioSection.style.display ="none"
}

btnCerrarSesion.onclick = function (){
    //vamos a eliminar las variable del localstorage 
    //local
    localStorage.clear();
   
    // mostarr el formulario y ocultarl el mensaje
 form.style.display = "block";
 usuarioSection.style.display= "none";

};

