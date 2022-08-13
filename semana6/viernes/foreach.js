// for la diferencia no retorna nada 
// sirve par iterar un arreglo 
// foreach es un bucle


const numeros = [ 1,2,3,4,5,6,7,8,9,10];

numeros.forEach((numeros,index)=>{

    return numeros *2  
});





//  console.log(numeros)


 const productos = [
    {
        name:"laptop",
        price: 1500,
    },
    {
        name:"celular",
        price:2300,
    },
    {
        name:"monitor",
        price:1000,
    },
 ];


 
 productos.forEach((productos)=>{
    if (productos.name == "celular"){
        console.log(productos.price)
    }
    
})


//  productos.forEach((productos)=>{
//     //dentro del for Ecach podemos hacer lo que queramos
//     console.log(productos)
//  });


 

//  productos.forEach((productos)=> console.log(productos));