const readlineSync = require('readline-sync');
let num = readlineSync.question("Ingresar un numero entero\n");

if (num>0 && num %2 == 0) {
    console.log("El numero es positivo y par");
}

else if (num>0 && num %2 !== 0) {
    console.log("El numero es positivo e impar");
}

else if (num<0) {
    console.log("El numero es negativo");
}

else if (num==0){
    console.log("El numero es cero");
}



