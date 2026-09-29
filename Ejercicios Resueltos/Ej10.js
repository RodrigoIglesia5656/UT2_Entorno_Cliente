let nota =-1;
while (nota <0 || nota >10){
    nota = Number(prompt("Introduce nota:"));
}
if (nota<5){
    console.log(nota+" es un Suspenso");
}else if (nota <9){
    console.log(nota+" es un Aprobado");
}else{
    console.log(nota+" es un Sobresaliente");
}

