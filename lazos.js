console.log(`Lazos bucles`);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
ciudadesDisponibles.push("Bueno Aires");
//ciudadesDisponibles.push("Buenos Aires");

//console.log(ciudadesDisponibles);
console.log(ciudadesDisponibles);

const edadComprador = 25;
const estaAcompanado = true;// booleano
const tienePasaje = true;
//const ciudadDestino = `Lima`;
const ciudadDestino = `Quito`;
let posicion = 0;
let destinoDispible = false;

while (posicion < ciudadesDisponibles.length) {
    if (ciudadesDisponibles[posicion] == ciudadDestino) {
        destinoDispible = true;
        //console.log(`Destino disponible: ${ciudadDestino}`);
        break;
    } //else {
       // console.log(`No hay pasajes para ese destino`);
    //}
    //posicion = posicion+1;
    posicion++; //FORMA ABREVIADA
}

console.log(`Destino disponible: `, destinoDispible);