console.log("Inicio del ejercicio");

let numero = Number(prompt("Introduce un número: "));
let resultado = 1; // <--- Variable nueva para acumular el resultado

// El bucle empieza en el número introducido y baja hasta 1
for (let i = numero; i > 0; i--) {
  if (i % 2 != 0) {
    resultado *= i; // <--- Multiplicamos en 'resultado', NO en 'numero'
    console.log(resultado);
  } else {
    console.log("-");
  }
}

console.log("El resultado final es: " + resultado);
console.log("Fin del ejercicio");
