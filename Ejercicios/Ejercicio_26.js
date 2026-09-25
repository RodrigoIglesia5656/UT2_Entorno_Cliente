const num = Number(prompt("Introduce un número"));

for(i = 1; i <= num; i++){
    if(i % 2 == 0){
        console.log("-" + i);
    } else {
        console.log(i);
    }
}