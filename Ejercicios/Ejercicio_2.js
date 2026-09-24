console.log("Empieza el ejercicio");

let nombre = prompt ("Introduce tu nombre");
let edad = Number(prompt ("Introduce tu edad"));

if(edad >= 18) {
    console.log("Te llamas " + nombre + " y eres mayor de edad");
} else {
    console.log("Te llamas " + nombre + " y eres menor de edad");
}
console.log("Termina el ejercicio");