let var1 = 9;
let var2 = 2;
let var3 = 10;
let var4 = 14;
let suma = var1 + var2;
console.log(suma);
let resta = var4 - var3;
console.log(resta);
let resultadoFinal = suma * resta;
console.log(resultadoFinal);
let esPar;
if ((resultadoFinal % 2) === 0) {
    esPar= true;
 }
console.log(esPar);
console.log("Mis variables iniciales fueron:"+" "+ var1 +"," + " " + var2 +"," + " " + var3 +" " + "y" +" "+ var4+"." + " " + 
"La respuesta a verificar si el resultado final es par es:" + " " + esPar);
