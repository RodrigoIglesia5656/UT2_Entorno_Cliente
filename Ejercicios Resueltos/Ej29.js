let numero= Number(prompt("Introduce un número:"));
const espacios = numero -2 
for (i=1;i<=numero;i++){
    let linea = ""
    if (i==1 || i == numero){
        for (j=1;j<=numero;j++){
            linea+="*"
        }
    }else{
        linea="*"
        for (j=1;j<=espacios;j++){
            linea+=" ";
        }
        linea+="*"
    }
    console.log(linea);
}

