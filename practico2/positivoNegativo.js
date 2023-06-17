const readlineSync = require('readline-sync');
let num = readlineSync.question("Ingrese un numero ");

if (num >= 1){

    console.log("El numero es positivo")}

else if (num == 0){
    console.log("El numero es cero")
}
    
else {
    console.log("El numero es negativo")}