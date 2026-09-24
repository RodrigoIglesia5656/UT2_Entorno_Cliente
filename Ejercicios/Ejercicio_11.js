console.log("Inicio del ejercicio");

let num1 = Number(prompt("Introduce el primer número: "));
let num2 = Number(prompt("Introduce el segundo número: "));

if(num1 > num2) {
    console.log("El numero " + num1 + " es mayor que el " + num2);
} else if (num1 < num2){
    console.log("El numero " + num1 + " es menor que el " + num2);
} else {
    console.log("Los números son iguales");
}

console.log("Fin del ejercicio");