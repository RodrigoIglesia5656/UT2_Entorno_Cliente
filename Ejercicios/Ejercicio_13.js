console.log("Inicio del ejercicio");

let num = 0;
while (num != -1) {
    num = Number(prompt("Introduce un número: "));
    if(num % 2 == 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

console.log("Bucle finalizado");

console.log("Fin del ejercicio");