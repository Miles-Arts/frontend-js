//Tipos de datos primitivos
//Alfa númerico

const nombrePasajero = "Luisa España";
console.log(nombrePasajero); //Las CONST no se pueden cambiar en el tiempo


let nombrePasajera = "Romina Medina";
console.log("Nombre clienta: " + nombrePasajera);

nombrePasajera = "Juanita";
console.log("Nombre nueva clienta: " + nombrePasajera + " - misma variable distinto nombre XD");


//Dato númerico

let valorBoleto = 1000;
const impuestoAeropuerto = 100;
//let valorBoleta = "1800";
//const tasaEmbarque = 60;
const porcentajeTasaEmbarque = 60 / 100;
var gestionAgencia = 100;

console.log("Valor pasaje: " + valorBoleto);


//Datos lógicos
//TRUE o FALSE

let boletoActivo = true;
let boletoInactivo = false;
console.log(boletoActivo);

//Operaciones arítméticas

//Suma
//let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;
//Orden precedencia
//() PArentesis
// - * y /  Multipliación y División
// suma y resta 
let totalBoletosFinal = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto) * porcentajeTasaEmbarque + gestionAgencia; //Orden Precedencia operaciones matemáticas
//let totalBoleto = 1700 + 65 + 100;
console.log("Precio total boletos: " , totalBoletosFinal);