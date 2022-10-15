console.log(`Actividad libro para
Leer \n` );
const librosDisponibles = new Array();

librosDisponibles.push(`La Hojarasca`);
librosDisponibles.push(`Sobre la televisión`);
librosDisponibles.push(`La Sociedad del Espectáculo`);
librosDisponibles.push(`Hábitos Atómicos`);

console.log(librosDisponibles);

const edadComprador = 15;
const sabeLeer = true;
const tieneElLibro = true;
//const busquedaLibro = `Los Cuatro Acuerdos`;
const busquedaLibro = `Hábitos Atómicos`;
let posicion = 0;
let librosDisponible = false;
let puedeComprarLibro = false;

//puedeComprar = (edadComprador >= 18 || estaAcompanado);

for (posicion = 0; posicion < librosDisponibles.length; posicion++) {
    if (librosDisponibles[posicion] == busquedaLibro) {
        librosDisponible = true;
        break;
    }
}

if (edadComprador && librosDisponible) {
    console.log(`Es posible vender el libro. La persona puede comprar. El libro disponible` , busquedaLibro);
} else if (puedeComprarLibro) {
    console.log(`No es posible vender el libro. Libro no está disponible`);
} else {
    console.log(`No es posible vender el libro.`);
}