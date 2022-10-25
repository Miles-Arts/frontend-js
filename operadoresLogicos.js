//Operadores de comparación 

const ciudadDestino = "Montevideo";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Caracas");

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
// NOt = !
const edadPasajero = 19;

console.log(`Verificando pasajes para ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && edadPasajero >= 18) {
    console.log("Pasajero cumple con los requisitos");
} else {
    console.log("No hay pasajes");
}