// tipo datos en js 
//string
//booleano
//number
//undefined
//null
//object


const mensaje= "hola";
const numero= 2;
const numermoString= "100";
let bool = true ;


const avisoLLuvia = function(estaLloviendo){
  if(estaLloviendo){
    console.log("esta lloviendo")
  }
  else{
    console.log("no esta lloviendo ")
  }
   
}

avisoLLuvia(true);


let laptops=["nuevas" , 1500, true ,65.5]


laptops[4] = "red"
laptops[laptops.length]="blue"

laptops[1]=1000
console.log(laptops);
console.log(laptops[1])
