//const ciudadDestino = "Quito";
//const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Caracas", "Buenos Aires", "Santa Cruz");

const datos = [
    {
        "ciudad": "Bogotá",
        "precio": 500,
    },
    {
        "ciudad": "Lima",
        "precio": 400,
    },
    {
        "ciudad": "Santiago",
        "precio": 380,
    },
    {
        "ciudad": "Montevideo",
        "precio": 200,
    },
];

const presupuestoDisponible = 440;

let i = 0;

//While  0 o más veces
//Do while 1 o más veces
/*while (i < datos.length  && datos[i].precio > presupuestoDisponible) {
    i++;
} if (i == datos.length)
    console.log("No hay pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: " + datos[i].ciudad)*/
let ciudadSelecionada = "";

do {
    if (datos[i].precio < presupuestoDisponible) {
        ciudadSelecionada = datos[i].ciudad;
        break;
    } i++;

} while (i < datos.length && ciudadSelecionada == "")

if (ciudadSelecionada == "")
    console.log("No hay pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: " + ciudadSelecionada);