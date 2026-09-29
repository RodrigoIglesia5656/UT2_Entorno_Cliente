let numero1 = Number(prompt("Introduce primer número:"));
let mayor = numero1
let numero2 = Number(prompt("Introduce segundo número:"));
if (numero2>mayor){
    mayor=numero2;
}
let numero3 = Number(prompt("Introduce tercer número:"));
if (numero3>mayor){
    mayor=numero3;
}

console.log("El mayor de "+numero1+", "+numero2+" y "+numero3+ " es: "+mayor);

