let numero = null
while (numero != -1){
    numero = Number(prompt("Introduce número:"));
    if (numero != -1){
        if (numero%2 == 0 ){
            console.log(numero+" es par")
        }else{
            console.log(numero+" es impar")
        }
    }else{
        console.log("¡Hasta pronto!")
    }
}

