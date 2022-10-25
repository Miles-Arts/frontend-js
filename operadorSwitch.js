const ciudadDestino = "Quito";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Caracas", "Buenos Aires");

let valorPasaje = 0;

console.log(`Verificando pasajes para ${ciudadDestino}`);

//if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
//Condición con If
/*if (ciudadDestino == "Buenos Aires") {
    valorPasaje = 500;
} else if (ciudadDestino == "Lima") {
    valorPasaje = 400;
} else if (ciudadDestino == "Santiago") {
    valorPasaje = 380;
} else if (ciudadDestino == "Montevideo") {
    valorPasaje = 200;
}*/

switch (ciudadDestino) {

    case "Bogotá": valorPasaje = 500;
        break;
    case "Lima": valorPasaje = 400;
        break;
    case "Santiago": valorPasaje = 380;
        break;
    case "Montevideo": valorPasaje = 200;
        break;
    default: console.log(`La ciudad ${ciudadDestino} no esta disponible`);
        break;
}
if (valorPasaje > 0)

    console.log(`El valor del pasaje: ${valorPasaje}`)
/*} else {
    console.log(`La ciudad ${ciudadDestino} no esta disponible`);
}*/