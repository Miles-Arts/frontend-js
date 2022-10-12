console.log("Asignando valores a las variables");

const miNombre = "Lucinda";
//let miNombre = "Lucinda ";
const miApellido = "Marruecos";

//console.log(miApellido);

//const miNombreCompleto = miNombre + miApellido;
const miNombreCompleto = miNombre + " " + miApellido;



//console.log(miNombreCompleto);



//PLATILLAS DE TEXTO
// INTERPOLACIÓN DE VARIABLES CON $ se hace con comillas sencillas invertidas

const textoMiNombre = `Mi nombre es: ${miNombre} ${miApellido}`;//SI
const textoMiNombreComillasSimples = "Mi nombre es: ${miNombre} ${miApellido}";//NO

console.log(textoMiNombre);
//console.log(textoMiNombreComillasSimples);


//INMUTABILIDAD Y TIPO DE DATO

let variableTexto = "Un Texto";

console.log(variableTexto);

variableTexto = 10;
console.log(variableTexto);