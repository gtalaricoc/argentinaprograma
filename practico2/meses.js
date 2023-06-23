const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingresar un numero entero del 1 al 12\n");
numero = Number(numero);
if (numero >=1 && numero <= 12){
    let meses = [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let mes =meses[numero - 1];
    let diasMeses = [31,28,31,30,31,30,31,31,30,31,30,31];
    let dias = diasMeses [numero - 1];
    console.log("La cantidad de dias del mes de %s es %i.", mes, dias);
    }
