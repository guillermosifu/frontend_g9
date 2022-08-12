//bucle  es una estructura repetetiva , es decir hacer algo muchas veces

//los bucles son usados para poder leer ARRAYS
//lee cada elemento de forma independiente 

// el bucle mas usado es el For 
// iterador => indice de l bucle 
//i ++
// i = i +1
// indica que se hara de 1 en 1
// for en castellano sign PARA 

// for (let i = 0 ; i <= 10 ; i++ ){
//     console.log("iterador" , i)
// }

// for(let i = 5; i <=20 ; i++){
//     console.log("indices", i)
// }

// for (let j =10 ; j <=50 ; j++){
//     console.log("jotas" , j);
// }

const alumnos = ["pepe" , "angel" ,"eduardo", "sofia", "carmen"];

for(let i= 0; i < alumnos.length; i++){
    console.log(alumnos[i])
}


const numeros = [1,2,3,4,5,6,7,8,9,10]

for (let j = 0 ; j < numeros.length; j++){
    //como haria atrapar los pares
     if(numeros[j] % 2 === 0){
        console.log(numeros[j])
     }

}


const laptops=[
    {
       marca : "mac",
       nombre: "i9",
       vendedor: "ripley",
       precio: 4500,
       calificacion: "5" 
    },

    {
        marca : "acer",
        nombre: "i9",
        vendedor: "falabella",
        precio: 4500,
        calificacion: "3" 
    },
]

for ( let i = 0 ; i <laptops.length ; i++) {
    console.log(laptops[i].vendedor)
}

// legth devuelve el numero de elementos de un array
// recuerden que el indce de una array comienza en 0


// for Each   tambien es un bucle 
// map tambnie es otro bucle 

//map

const productos=[
    {
        name:"laptop",
        price: 1500,
    },
    {
        name:"celular",
        price: 2300,
    },
    {
        name:"monitor",
        price:3500,
    }
]

productos.map((productos)=>{
 
    console.log("productos",productos.name)

});


const places = [
    {
        name: "tecsup",
        location: "peru",
    },
    {
        name:"playa",
        location:"cancun",
    },
    {
        name:"parque",
        location:"kenedi",
    }
]

places.map((places)=>{
 console.log(places.location)
})



// veamos el reutnr del map
const numerito = [1,2,3,4,5,6,7,8,9,10];

const operacionProducto = numerito.map((numerito)=>{
    return numerito * 2
})

// cual es el valor de operacionProducto 
// 
console.log(operacionProducto)

const productos2=[
    {
        name:"televisor",
        price: 1200,
    },
    {
        name:"ps5",
        price:3500,
    },
    {
        name:"laptop",
        price:2000,
    }
]


const resultado=productos2.map((productos2)=>{
    return productos2.price *2
})
console.log(resultado)