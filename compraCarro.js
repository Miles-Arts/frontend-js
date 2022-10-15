console.log(`Compra Carro \n` );
const carrosDisponibles = new Array();

carrosDisponibles.push(`Mercedes Benz`);
carrosDisponibles.push(`Porsche`);
carrosDisponibles.push(`BMW`);
carrosDisponibles.push(`Audi`);

console.log(carrosDisponibles);

const edadComprador = 18;
const sabeConducir = true;
const tienePase = true;
//const busquedaLibro = `Los Cuatro Acuerdos`;
const busquedaCarro = `BMW`;
let posicion = 0;
let carroDisponibleSn = false;
let puedeComprarCarro = false;

//puedeComprar = (edadComprador >= 18 || estaAcompanado);

for (posicion = 0; posicion < carrosDisponibles.length; posicion++) {
    if (carrosDisponibles[posicion] == busquedaCarro) {
        carroDisponibleSn = true;
        break;
    }
}

if (sabeConducir && carroDisponibleSn) {
    console.log(`Es posible vender el carro. La persona puede comprar. Carro disponible` , busquedaCarro);
} else if (puedeComprarCarro) {
    console.log(`No es posible vender el carro. Marca `, busquedaCarro ,` no está disponible`);
} else {
    console.log(`No es posible vender el carro de marca:`, busquedaCarro,`.` );
}