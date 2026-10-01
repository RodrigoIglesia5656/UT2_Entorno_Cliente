console.log("Inicio del ejercicio");

let num = Number(prompt("Introduce un numero: "));
let divisor = 0;
let contador = 0;

while (divisor < num) {
    contador = num % divisor;
    if (contador == 0) {
        console.log(divisor);
    }
    divisor++;
}
if (divisor == num) {
    console.log("El numero es perfecto " + "La suma es : " + divisor);
} else {
    console.log("El numero NO es perfecto " + "La suma es : " + divisor);
}

console.log("Fin del ejercicio");