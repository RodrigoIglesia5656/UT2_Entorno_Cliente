const n = Number(prompt("Introduce un número: "));

for (i = 0; i <= n; i++) {
  if (n % i == 0) {
    console.log(i);
  } else {
    console.log("-");
  }
}
