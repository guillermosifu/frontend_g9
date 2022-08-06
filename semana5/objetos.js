//objeto es una entidad independiente ,tiene propiedades y atributos 

//atributos de un carro
//timon,pedal,llantas,

// un objeto es compuesto por un key(llave)  y un value (valor)

//creea el objeto del carro 

const carro ={
    color: "azul",
    motor: 3.0,
    modelo: "audi",
    nuevo: true,
};

//onjeto de persona


const persona={
    edad: 30,
    nombre: "guillermo",
    sexo:"masculino",
    talla: 1.76,

}

const casa={
    escritorio:"rojo",
    cama:"king",

}


// como acceder a cada value de un key
console.log("carro",carro.motor)
console.log("persona", persona)

// como insertar nuevo key y value en un objeto
//forma 1
persona.celular = 999999;
//forma dos
persona["profesion"]= "inge";
console.log("profesion de ls personas es:" ,persona)
// como cambio un value de un objeto?

persona.edad= 35;


//crear una funcion que me valide si el es usario es de peru 
// si es de peru imprimir su nickname junt a su nivel de juego 
// si no es de peru imprimie  oye no eres de peru 


// creare el objeto de usuario

const usuario = {
    nickname:"sabrosito",
    email:"tulokito@gmail.com",
    password : "********",
    carnetVacuacion : true,
    location : "italia",
    level: "pro",
    edad: "18",
};

const DefinirUsuarioPeruano =(usuarioObjeto)=>{

    const{nickname,carnetVacuacion,level}=usuarioObjeto;

    if(carnetVacuacion=== true){
        return `${nickname} ${level}`;
    }else{
        return `oye tu ${nickname} no eres de peru`;    }

}

console.log(DefinirUsuarioPeruano(usuario))
