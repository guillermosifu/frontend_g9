//cuantos datos contienes una varuable
// uno a al vez 

//un arreglo o ARRAYS es un concujunto de datos
//la forma declarar un arraya es parecida a la de una variable 
//sin embargo debemo colocar [] despues del igual ejemplo

//arreglo vacio  

let alumnos = ["guillermo", "pablito ", "sofia","kenny","angel"];
console.log("alumnos",alumnos)

let laptops = ["mac"]
console.log(laptops)

// puedo tener una lista de diferentes datos
let variosTipo=["guillermo", 32,true , 1.76]
console.log(variosTipo)

//como puedo acceder a un valor de un arreglo
console.log("alumnos",alumnos)
console.log(alumnos[3])

//puedo alterarl la lista en mi array?
alumnos[0]="eduardo";
alumnos[3]="juan";

//asi como puedo reasignar un datos en el indice tambien puedo crear datos 
//alumnos[4] es el ultimo dato del array

alumnos[5]="guillermo";
alumnos[6]="anastasio";
alumnos[7]="loco"

//como pueso yo ssber cuantos elementos tiene un array?
//los array tiene una funcion llamada lenght la cual permite saber los elementos quwe tiene 

console.log("cantidad de elementos" ,alumnos.length)

//como puedo agregar un elemento en la ultimo posicion del array 
//esto en que posicion añade
alumnos[alumnos.length] = "alberto"
console.log("creanado un nuevo elemento", alumnos)

//si quiero obtener el ultimo elemento de mi array ?
//.length retorna un number

console.log("ultimo elemento de mi array", alumnos[8])

// practca creae dos arrays 1 de personas y otro de cosas de oficina

const personas=[
    "maggue",
    "bruno",
    "thanos",
    "luna",
    "mina",
    "ivi"
]

const cosas=[
   "luces",
   "escritorio",
   "pantallas",
   "laptops"
]


console.table("personas",personas)
console.log("Cosas",cosas)

