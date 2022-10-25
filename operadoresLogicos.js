//Operadores de comparación 

const ciudadDestino = "Buenos Aires";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Caracas", "Buenos Aires");

//Palabra reservada if if
//Evalua una condición
//si (ciudad destino esta dentro de la lita) {
//    escribe: "vendo pasaje";
//}

/*console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log("Pasaje Disponible");
} else {
    console.log("No hay pasajes");
}*/


const valorPasaje = "1000";

if (valorPasaje == "1000") {
    //console.log("Pasaje sin descuento");
} else {
    //console.log("Pasaje sin descuento");
}

const contraseña = 123;
if (contraseña == 1230) {
    //console.log("Contraseña correcta");
} else {
    //console.log("Contraseña incorrecta");
}

//Operadores Logicos
//AND - Y
//OR - or
//NO - not

//AND = &&  -Se deben cumplir las dos condiciones
//OR = ||   -Se cumple una de las dos condiciones para ser aceptado
// NOt = !  -no se cumple y cambia de valor
//const edadPasajero = 23;
//const estaAcompanado = false;
let edadPasajero = 13;
let estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if (edadPasajero >= 18 || estaAcompanado) {

    if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && (edadPasajero >= 18 || estaAcompanado)) {
        console.log("Pasajero cumple con los requisitos");
    } else {
        console.log("EL pasajero no cumple con los requisitos mínimos para viajar.");
    }
} /*else {
    //console.log("No cumple con los requitos")
}*/


//APLICANDO LÓGICA NEGATIVA

edadPasajero = 17;
estaAcompanado = false;

if (!(ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && (edadPasajero >= 18 || estaAcompanado)) {

    console.log("EL pasajero no cumple con los requisitos mínimos para viajar.");
} else {
    console.log("Pasajero cumple con los requisitos");
}
