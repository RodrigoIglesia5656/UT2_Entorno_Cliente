let numero= Number(prompt("Introduce un número:"));
let suma=0
for (i=1;i<=numero;i++){
    if (i%2!=0){
        suma+=i
    }
}
console.log("La suma de los numeros impares es: "+suma);