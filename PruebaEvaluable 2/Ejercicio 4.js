let num = Number(prompt("Introduce un número: "));
let num2 = Number(prompt("Introduce otro número: "));
let divisor = 0;
for (i = 0; i < num1; i++) {
    if (num % i == 0) {
        i += divisor;
    }
}
console.log(divisor);