const artistasRepresentados = new Array ("Picasso" , "Botero" , "Mondrian", "Obregón" , "Salcedo" , "Bursztyn")
const ciudadesFerias = new Array ("Bogotá" , "Londres" , "El Cairo", "Sydney" , "Nueva York" , "Buenos Aires")


let nuevoArtista = "Man Ray";
let mesExposicion = "12";
let ciudadExposicion = "Bogotá"

//console.log("La Próxima exposiicón es del artista Picasso en Bogotá");

if (nuevoArtista == "Man Ray" && mesExposicion == 12) {
    console.log(`La próxima exposición es del artista ${nuevoArtista} se realizara en el mes ${mesExposicion}`)
} else {
    console.log(`El artista ${nuevoArtista} aun no tiene fecha de exposición`)
}

if (artistasRepresentados.indexOf(nuevoArtista) && ciudadesFerias.indexOf(ciudadExposicion)) {
    console.log(`La próxima exposición es en la ciudad ${ciudadExposicion} se realizara en el mes ${mesExposicion}`)
} else {
    console.log(`Aun no hay exposición en la ciudad de ${ciudadExposicion} del artista ${nuevoArtista} `)
}
