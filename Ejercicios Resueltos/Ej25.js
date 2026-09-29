let numero= Number(prompt("Introduce un número:"));
for (i=1;i<=numero;i++){
    let linea = ""
    for (j=0;j<i;j++){
        linea+="*"
    }
    console.log(linea);
}

