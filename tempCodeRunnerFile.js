let valor1 = prompt("escriba el valor 1 : ");
let valor2 = prompt("escriba el valor 2 : ");
let valor3 = prompt("escriba el valor 3 : ");

if((valor1>valor2)&&(valor1>valor3)){
    console.log(`el ${valor1} es el mayor`);
    if(valor2>valor3){
        console.log(`y el ${valor3} es el menorG`);
    }else{
        console.log(`y el ${valor2} es el menorK`);
    }    
    
}else if((valor2>valor1)&&(valor2>valor3)){
    console.log(`el valor ${valor2} es el mayorH`);
    if(valor1>valor3){
        console.log(`y el ${valor3} es el menor>`);
    }else{
        console.log(`y el ${valor1} es el menorZ`);
    }        
}
else{
    console.log(`el valor ${valor3} es el mayort`);
    if(valor1>valor2){
        console.log(`y el ${valor2} es el menorE`);
    }else{
        console.log(`y el ${valor1} es el menorO`);
    }    
}