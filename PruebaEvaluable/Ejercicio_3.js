/*Solicita al usuario que introduzca mediante prompt() su tipo de vehículo ("moto", "coche" o "camion"). Utiliza un switch directo para mostrar el precio del peaje:
•
"moto" → "El peaje es de 2€"
•
"coche" → "El peaje es de 5€"
•
"camion" → "El peaje es de 10€"
•
Cualquier otro texto → "Vehículo no reconocido".*/

console.log("Inicio del Ejercicio");

let vehiculo = prompt("Introduce tu tipo de vehículo");

switch(vehiculo){
    case "moto":
        console.log("El peaje es de 2€");
        break;
    case "coche":
        console.log("El peajes es de 5€");
        break;
    case "camion":
        console.log("El peaje es de 10€");
        break;
    default :
        console.log("Vehículo no reconocido");
        break;
}

console.log("Fin del Ejercicio");