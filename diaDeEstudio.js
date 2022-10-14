console.log(`¿Hoy estudiamos? \n`)

const entornoTranquilo = false;
const clasePorHacer = true;
const muchoRuido = true;
const porcentajeDeClases = 50;

if (entornoTranquilo && clasePorHacer) {
    console.log(`Hoy estudiamos`);
} else if (muchoRuido && (porcentajeDeClases >= 49 )){
    console.log(`Mejor no estudiar hoy`)
} else {
    console.log(`Hoy no estudiamos`);
}