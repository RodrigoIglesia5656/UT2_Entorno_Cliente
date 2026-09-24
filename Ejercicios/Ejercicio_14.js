console.group("Inicio del Ejercicio");

let numero = Number(prompt("Introduce un número: "));
let primo = true;

for (let i = 2; i < numero && primo; i++) {
    if (numero % i == 0) {
        primo = false;
    }
}
if (primo) {
    console.log("SI es primo");
} else {
    console.log("No es primo");
}

console.group("Fin del Ejercicio");
