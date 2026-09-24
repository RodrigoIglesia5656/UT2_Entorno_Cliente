const n = parseInt(prompt("Introduce un número:"));

for (let i = 1; i <= n; i++) {
  let linea = "";
  for (let j = 1; j <= i; j++) {
    linea += "*";
  }
  console.log(linea);
}