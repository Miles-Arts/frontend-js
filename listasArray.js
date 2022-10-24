//Array ciudad1 = "Bogotá";


//Definición de una lista, con tipo de Dato alfa númerico

const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago");

//console.log(ciudadesDisponibles);
//console.log(ciudadesDisponibles("1"))
//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina"];
//console.log(paisesDisponibles);

paisesDisponibles.push("Uruguay");
ciudadesDisponibles.push("Montevideo");

//console.log(ciudadesDisponibles);
//console.log(paisesDisponibles);

paisesDisponibles.unshift("Ecuador");
ciudadesDisponibles.unshift("Quito");

//console.log(ciudadesDisponibles);
//console.log(paisesDisponibles);

//Mostrando el primer elemento de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

paisesDisponibles.splice(1,2,"Venezuela", "Paraguay");
console.log(paisesDisponibles);