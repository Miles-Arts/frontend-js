const ciudadDestino = "Quito";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Caracas", "Buenos Aires", "Santa Cruz");
const precioCiudad = new Array(500, 400, 380, 200, 390);
const presupuestoDisponible = 390;

let i = 0;

//console.log(`Verificando pasajes para ${ciudadDestino}`);

while (precioCiudad[i] > presupuestoDisponible) {
    i++;
} console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);