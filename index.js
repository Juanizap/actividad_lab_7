const prompt = require("prompt-sync")({sigint:true});

/* Lab 7 */
/*Ejercicio 1 */
/*
let valor1 = parseInt(prompt("escriba el valor 1 : "));
let valor2 = parseInt(prompt("escriba el valor 2 : "));
let valor3 = parseInt(prompt("escriba el valor 3 : "));



if((valor1>valor2)&&(valor1>valor3)){
    console.log(`el ${valor1} es el mayor`);
    if(valor2>valor3){
        console.log(`y el ${valor3} es el menor`);
    }else{
        console.log(`y el ${valor2} es el menor`);
    }    
    
}else if((valor2>valor1)&&(valor2>valor3)){
    console.log(`el valor ${valor2} es el mayor`);
    if(valor1>valor3){
        console.log(`y el ${valor3} es el menor`);
    }else{
        console.log(`y el ${valor1} es el menor`);
    }        
}
else{
    console.log(`el valor ${valor3} es el mayor`);
    if(valor1>valor2){
        console.log(`y el ${valor2} es el menor`);
    }else{
        console.log(`y el ${valor1} es el menor`);
    }    
}*/

/*tabla de multiplicar*/

/*
let valor = parseInt(prompt("ingrese un valor para multiplicar: "));

for(let i = 0; i < 11; i++){
    let valorPlus = valor * i;
    console.log(`${valor} x ${i} = ` + valorPlus);
}
*/


// Tabla de dividir 

let valorUsuario = parseInt(prompt("ingrese un numero: "));

for(let i= 10 ; i > 0; i--){
    valorDiv = valorUsuario/i;
    console.log(`${valorUsuario} / ${i} =` + valorDiv);
}

