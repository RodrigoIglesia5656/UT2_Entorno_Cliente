let numero= Number(prompt("Introduce un número:"));
console.log("Los multiplos de 3 entre 0 y "+numero+" son:");
for (i=3;i<=numero;i++){
    if (i%3==0){
        console.log(i);
    }
    
}

