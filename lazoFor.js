console.log(`Lazos For`); // FOR generalmente avalua condiciones numéricas

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push(`Bogotá`);
ciudadesDisponibles.push(`Caracas`);
ciudadesDisponibles.push(`Lima`);
ciudadesDisponibles.push(`Bueno Aires`);
//ciudadesDisponibles.push("Buenos Aires");

//console.log(ciudadesDisponibles);
console.log(ciudadesDisponibles);

const edadComprador = 15;
const estaAcompanado = true;// booleano
const tienePasaje = true;
//const ciudadDestino = `Lima`;
const ciudadDestino = `Texas`;
let posicion = 0;
let destinoDisponible = false;
let puedeComprar = false;

puedeComprar = (edadComprador >= 18 || estaAcompanado);

/*while (posicion < ciudadesDisponibles.length) {
    if (ciudadesDisponibles[posicion] == ciudadDestino) {
        destinoDispible = true;
        //console.log(`Destino disponible: ${ciudadDestino}`);
        break;
    } //else {
    // console.log(`No hay pasajes para ese destino`);
    //}
    //posicion = posicion+1;
    posicion++; //FORMA ABREVIADA
}*/

//LAZOS FOR

for (posicion = 0; posicion < ciudadesDisponibles.length; posicion++) {
    if (ciudadesDisponibles[posicion] == ciudadDestino) {
        destinoDisponible = true;
        break;
    }
}

if (puedeComprar && destinoDisponible) {
    console.log(`Es posible vender pasajes. La persona puede comprar. El destino está disponible`);
} else if (puedeComprar) {
    console.log(`No es posible vender pasajes. El destino no está disponible`);
} else {
    console.log(`No es posible vender pasajes.`);
}

//console.log(`Destino disponible: `, destinoDisponible);