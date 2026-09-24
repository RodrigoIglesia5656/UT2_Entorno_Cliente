console.log("Inicio del ejercicio");

let num1 = Number(prompt("Introduce el primer número: "));
let num2 = Number(prompt("Introduce el segundo número: "));
let num3 = Number(prompt("Introduce el tercer número: "));

if(num1 > num2 && num1 > num3) {
    console.log("El numero mayor es " + num1);
} else if (num1 == num2 && num2 > num3) {
    console.log("Los números mayores son " + num1 + "y" + num2);
} else if (num1 == num3 && num2 < num3) {
    console.log("Los números mayores son " + num1 + "y" + num3);
} else if (num2 > num1 && num2 > num3) {
    console.log("El numero mayor es " + num2);
} else if (num2 == num1 && num2 > num3) {
    console.log("Los números mayores son " + num2 + "y" + num1);
} else if (num2 == num3 && num3 > num2) {
    console.log("Los números mayores son " + num2 + "y" + num3);
} else if (num3 > num1  && num3 > num2){
    console.log("El numero mayor es " + num3);
} else if (num3 == num1 && num1 > num2) {
    console.log("Los números mayores son " + num3 + "y" + num1);
} else if (num3 == num2 && num2 > num1) {
    console.log("Los números mayores son " + num3 + "y" + num2);
} else if (num1 == num2 && num2 == num3) {
    console.log("Los tres números son iguales");
} else {
    console.log("No valido");
}
console.log("Fin del ejercicio");