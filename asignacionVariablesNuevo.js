//CONST:  espacio de memoria luego de ser asignado no cambia en el tiempo

const valorPasaje = 1650;

console.log(valorPasaje);


const nombrePasajero = "Catalina";
const apellidoPasajero = "Riviera";
//console.log(nombrePasajero);
//console.log(apellidoPasajero);


//LET: espacio de memoria que puede cambiar duramte la ejecución del programa

/*let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;

console.log(nombreCompletoPasajero);*/


//VAR   espacio de memoria que puede cambiar duramte la ejecución del programa.
//El alcanze de VAR

var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;


//BLOQUE 

{
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("Variable con let: " + nombreCompletoPasajero);
    console.log("Variable con var: " + nombreCompletoDelPasajero);
}

console.log("Variable con let: " + nombreCompletoPasajero);
console.log("Variable con var: " + nombreCompletoDelPasajero);

