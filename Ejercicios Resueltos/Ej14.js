let numero = Number(prompt("Introduce número:"));
let primo=true
for (i=2;i<numero && primo;i++){
    if (numero%i==0)
        primo=false
}
if(primo && numero !=1){
    console.log(numero+" es primo")
}else{
    console.log(numero+" NO es primo")
}