
console.log(`Actividad Salir en Bicicleta \n`);

const buenClima = false;
const deDia = true;
const biciPerfecta = true;
const kilometrosSalida = 30;
const malClima = true;

if (buenClima && (deDia || biciPerfecta)) {
    console.log(`Hoy salgo en bicicleta`)
} else if (kilometrosSalida >= 100 || malClima) {
    console.log(`Hoy no ha salida en bicicleta`)
}