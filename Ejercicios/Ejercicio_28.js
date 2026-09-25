const num1 = Number(prompt("Introduce el primer número: "));
const num2 = Number(prompt("Introduce el segundo número: "));

for (i = 0; i <= num1 && i<= num2; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    console.log(i);
  } else {
    console.log("-");
  }
}
