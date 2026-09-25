/*Solicita al usuario una opción (1–3) y en función de la opción seleccionada:
•
1 → console.log(“Has elegido ver datos”);
•
2 → console.log(“Has elegido modificar datos”);
•
3 → console.log(“Has elegido salir”);*/

console.log("Inicio del Ejercicio");

let n = Number(prompt("Introduce un número"));

switch(n){
    case 1:
        console.log("Has elegido ver datos");
        break;
    case 2:
        console.log("Has elegido modificar datos");
        break;
    case 3:
        console.log("Has elegido salir");
        break;      
}

console.log("Fin del Ejercicio");