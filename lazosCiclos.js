const ciudadDestino = "Quito";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Caracas", "Buenos Aires", "Santa Cruz");
const precioCiudad = new Array(500, 400, 380, 200, 390, 389, 350);
const presupuestoDisponible = 210;

let i = 0;

//While  0 o más veces
//Do while 1 o más veces
//


while (precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length) {
    i++;
} if (i == ciudadesDisponibles.length)
    console.log("No hay pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);