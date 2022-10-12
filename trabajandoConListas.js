console.log(`Trabajando con listas`);

const bogota = "Bogotá";
const lima = "Lima";
const santiago = "Santiago";
const buenosAires = "Buenos Aires";

//console.log(bogota,lima,santiago,buenosAires);

//const ciudadesDisponibles = new Array ();

//const ciudadesDisponibles = [`Bogotá` , `Lima` , `Santiago` , `Bueno Aires`];

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");

console.log(ciudadesDisponibles);

const ciudadesMasVendidas = [];

ciudadesMasVendidas.push("Sáo Paulo");
ciudadesMasVendidas.push("Buenos Aires");
//ciudadesMasVendidas.push("Tigre");

console.log(ciudadesMasVendidas);

console.log(ciudadesDisponibles[2]);
console.log(ciudadesMasVendidas[0]);

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`Tenemos ${cantidadCiudades} ciudades disponibles`);

ciudadesDisponibles.splice(1,1); //splice sirve para eliminar elementos, se añade desde dónde eliminar y cuántos elementos eliminar
console.log(ciudadesDisponibles);