let ano = Number(prompt("Introduce un año:"));

if(ano % 4 == 0 && ano % 100 != 0){
    console.log("El año es bisiesto");
} else if (ano % 400 == 0) {
    console.log("El año es bisiesto");
} else {
    console.log("El año NO es bisiesto");
}

