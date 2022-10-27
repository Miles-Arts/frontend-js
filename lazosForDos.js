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

const presupuestoDisponible = 400;

//let i = 0;
//While  0 o más veces
//Do while 1 o más veces
/*while (i < datos.length  && datos[i].precio > presupuestoDisponible) {
    i++;
} if (i == datos.length)
    console.log("No hay pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: " + datos[i].ciudad)*/

//FOr desde una vlor inical para un valor final -- Repita PARA
let ciudadSelecionada = "";

for (let i = 0; i < datos.length  && ciudadSelecionada == ""; i++) {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSelecionada = datos[i].ciudad;
        /*break;*/
    }
}

if (ciudadSelecionada == "")
    console.log("No hay pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: " + ciudadSelecionada);

