let numero= Number(prompt("Introduce un número:"));
let factorial=1;
for (i=1;i<=numero;i++){
    if (i%2!=0){
        factorial=factorial*i
    }
    
}
console.log("El factorial de "+numero+" es: "+factorial)

