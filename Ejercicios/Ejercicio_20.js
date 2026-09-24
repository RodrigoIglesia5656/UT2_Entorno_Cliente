console.log("Inicio del ejercicio");

let numero = 0;

while( numero != "SALIR") {
    numero = prompt("Introduce un número: ");
    if( numero == "SALIR") {
        break;
    }
    for(i = 0; i <= 10; i++) {
        console.log(numero + "x" + i +"=" + numero * i)
    }
}

console.log("Fin del ejercicio");