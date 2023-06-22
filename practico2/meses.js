const readlineSync = require('readline-sync');
let mes = readlineSync.question("Ingresar un numero entero del 1 al 12\n");

mes = {   
    1:"enero",
    2:"febrero", 
    3:"marzo",
    4:"abril",
    5:"mayo",
    6:"junio",
    7:"julio",
    8:"agosto",
    9:"septiembre",
    10:"octubre",
    11:"noviembre",
    12:"diciembre"
}


if (mes>=1 && mes<=12){
    let cantidadDeDias = [];
}

if (mes == 2) {
    cantidadDeDias == 28;
  } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    cantidadDeDias == 30;
  } else {
    cantidadDeDias == 31;
  }

console.log("La cantidad de dias del mes de " + mes + " es " + cantidadDeDias);

