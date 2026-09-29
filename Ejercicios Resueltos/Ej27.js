let numero= Number(prompt("Introduce un número:"));
let cont=2
for (i=2;i<numero;i++){
    if (numero%i==0)
        cont++;
}
console.log(numero+" tiene "+cont+" divisores");
