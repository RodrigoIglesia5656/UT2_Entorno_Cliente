let numero1 = Number(prompt("Introduce primer número:"));
let numero2 = Number(prompt("Introduce segundo número:"));

console.log("Has introducido "+numero1+" y "+numero2)
if (numero1 > numero2){
    console.log(numero1+" es mayor");
}else if (numero2  > numero1){
    console.log(numero2+" es mayor");
}else{
    console.log("Son iguales");
}
