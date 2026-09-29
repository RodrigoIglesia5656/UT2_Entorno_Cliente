let numero = null
while (numero != "SALIR"){
    numero= prompt("Introduce un número:");
    for (i=1;i<=10 && numero != "SALIR";i++){
        console.log(numero+" * "+i+" = "+Number(numero*i));
    }
}

