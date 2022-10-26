const mejorOferta = "D1";
const empresaOferta = new Array("Claro", "Bavaria", "Rappi", "Davivienda", "Aviatur", "IBM", "Only" , "D1");

let sueldoPromedio = 0;

console.log(`Revisiando oferta laboral de ${mejorOferta}`);


switch (mejorOferta) {
    case "Claro": sueldoPromedio = 500;
        break;
    case "IBM": sueldoPromedio = 5500;
        break;
    case "Bavaria": sueldoPromedio = 2000;
        break;
    case "Rappi": sueldoPromedio = 2500;
        break;
    case "Only": sueldoPromedio = 3500;
        break;
    default: console.log(`La oferta ${mejorOferta} no fue aceptada`);
        break;

} if (sueldoPromedio > 0)

    console.log(`La oferta de la empresa ${mejorOferta} fue aceptada con un sueldo de $${sueldoPromedio} dólares + Beneficios.  `);



/*switch (ciudadDestino) {

    case "Bogotá": valorPasaje = 500;
        break;
    case "Lima": valorPasaje = 400;
        break;
    case "Santiago": valorPasaje = 380;
        break;
    case "Montevideo": valorPasaje = 200;
        break;
    default: console.log(`La ciudad ${ciudadDestino} no esta disponible`);
        break;
}
if (valorPasaje > 0)

    console.log(`El valor del pasaje: ${valorPasaje}`)*/
/*} else {
    console.log(`La ciudad ${ciudadDestino} no esta disponible`);
}*/