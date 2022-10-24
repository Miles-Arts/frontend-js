const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Caracas");

const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina", "Uruguay", "Venezuela"];

const cantidadCiudades = ciudadesDisponibles.length;
//const cantidadPaises = paisesDisponibles.length;

//console.log(`En la Lista hay ${cantidadCiudades} ciudades disponibles.`);
//console.log(`En la Lista hay ${paisesDisponibles.length} países disponibles.`);


//Remover el primer elemento
//ciudadesDisponibles.shift();
//console.log(ciudadesDisponibles);


//Remover el último elemento
//ciudadesDisponibles.pop();
//console.log(ciudadesDisponibles);


//console.log(`En la Lista hay ${ciudadesDisponibles.length} ciudades disponibles.`);
//console.log(`En la Lista hay ${paisesDisponibles.length} países disponibles.`);


//Filtro de elementos dentro de una lista

//const paisesFiltrados = paisesDisponibles.filter((e) => e == "Brasil");
//console.log(paisesFiltrados);

const paisesFiltrados = paisesDisponibles.filter((e) => e == "Bolivia");
//console.log(paisesFiltrados);


//Crear una lista como cadena de caracteres - Unificar Elementos
//variable alfa númerica JOIN
console.log(paisesDisponibles.join("-"));

//Order la lista ordel alfabeto
console.log(paisesDisponibles.sort());
//console.log(paisesDisponibles);


//Posición elemento en la lista
//console.log(`Perú está  en la posición:  ${paisesDisponibles.indexOf("Perú")}`);


//Unificar dos listas
const listasPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
//listasPaisesYCiudades.concat(ciudadesDisponibles);

console.log(listasPaisesYCiudades);