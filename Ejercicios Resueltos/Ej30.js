let numero= Number(prompt("Introduce un número:"));
for (i=1; i<=numero; i++){
    linea=""
    //construyo espacios iniciales
    for (j=0;j<numero-i;j++){
        linea+=" "
    }
    //construyo asteriscos
    for (j=1;j<=(i*2)-1;j++){
        linea+="*"
    }
    //construyo espacios finales
    for (j=0;j<numero-i;j++){
        linea+=" "
    }
    console.log(linea);
}