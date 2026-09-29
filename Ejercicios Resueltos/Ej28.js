let numero1= Number(prompt("Introduce primer número:"));
let menor = numero1;
let numero2= Number(prompt("Introduce segundo número:"));
if (numero2 < menor){
    menor = numero2
}
let encontrado = false
for (i=menor;i>=1 && !encontrado;i--){
    if (numero1%i == 0 && numero2%i ==0){
        console.log("El MCD de "+numero1+" y "+numero2+" es: "+i)
        encontrado=true;
    }
}