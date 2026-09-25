/*Desarrolla un programa que:
•
Solicite una nota (0–10) al usuario mediante prompt()
•
Utiliza una estructura switch agrupando los casos de la siguiente manera para mostrar el mensaje correspondiente:
o
1-4: “Suspenso”
o
5-6: “Aprobado”
o
7-8: “Notable”
o
9-10: “Sobresaliente”*/

console.log("Inicio del Ejercicio");

let nota = Number(prompt("Introduce tu nota del (0 - 10):"));

switch (nota) {

    case 1:
        console.log("Suspenso");
        break;
    case 2:
        console.log("Suspenso");
        break;
    case 3:
        console.log("Suspenso");
        break;
    case 4:
        console.log("Suspenso");
        break;
    case 5:
        console.log("Aprobado");
        break;
    case 6:
        console.log("Aprobado");
        break;
    case 7:
        console.log("Notable");
        break;
    case 8:
        console.log("Notable");
        break;
    case 9:
        console.log("Sobresaliente");
        break;
    case 10:
        console.log("Sobresaliente");
        break;
}
console.log("Fin del Ejercicio");