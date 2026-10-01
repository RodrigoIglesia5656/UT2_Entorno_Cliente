/*Diseña un algoritmo que calcule el costo total que debe pagar un cliente en un estacionamiento en
función de las horas exactas que permaneció en él. La tarifa se calcula por tramos acumulativos con
las siguientes condiciones: - Tramo 1: Las primeras 2 horas se cobran a 5.00 unidades por hora. -
Tramo 2: De la tercera a la quinta hora (horas 3, 4 y 5) se cobran a 4.00 unidades por hora. - Tramo
3: A partir de la sexta hora en adelante, cada hora cuesta 3.00 unidades. - Condición especial: Si el
tiempo total de estacionamiento supera las 10 horas, se aplica un descuento del 10% sobre el total
acumulado de la tarifa*/

console.log("Inicio del ejercicio");

let horas = Number(prompt("Introduce las horas de estacionamiento: "));
let precio = 0;

if(horas > -1 && horas <= 2){
    precio = (5 * horas);
    console.log("Cantidad a pagar: " + precio);
} else if (horas > 2 && horas <= 5){
    precio = (4 * horas);
    console.log("Cantidad a pagar: " + precio);
} else if (horas > 5 ) {
    precio = (3 * horas);
    console.log("Cantidad a pagar: " + precio);
    if(horas > 10) {
        precio = (precio - (precio * 0.1))
        console.log("Cantidad a pagar (con descuento): " + precio)
    }
} else {
    console.log("Valor no válido");
}

console.log("Fin del ejercicio");