console.log ("Inicio del ejercicio");

let sumatorio = 0;
let nota = 0;
let media ;

for (i = 0; i < 10; i++) {
    nota = Number(prompt("Introduce una nota"));
    sumatorio += nota;
}
media = sumatorio / i ;
console.log (sumatorio);
console.log("Media: " + media);

console.log ("Fin del ejercicio");