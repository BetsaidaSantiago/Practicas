function obtenerDatosMayoresAlPromedio(datos) {
    const sumatoria = datos.reduce((acc, valor) => acc + valor, 0);
    const promedio = sumatoria / datos.length;

    const datosMayoresAlPromedio = datos.filter(valor => valor > promedio);

    return {
        promedio,
        datosMayoresAlPromedio
    };
}

// Pregunta al usuario la cantidad de datos
const cantidadDatos = parseInt(prompt("Ingrese la cantidad de datos:"));

// Validación para asegurar que se ingrese un número válido
if (isNaN(cantidadDatos) || cantidadDatos <= 0) {
    console.log("Por favor, ingrese una cantidad válida de datos.");
} else {
    // Pide al usuario ingresar los datos uno por uno
    const datosIngresados = [];
    for (let i = 0; i < cantidadDatos; i++) {
        const dato = parseFloat(prompt(`Ingrese el dato ${i + 1}:`));
        if (!isNaN(dato)) {
            datosIngresados.push(dato);
        } else {
            console.log("Por favor, ingrese un valor numérico válido.");
            i--; // Resta uno al índice para repetir la solicitud del mismo dato.
        }
    }

    // Obtiene y muestra los resultados
    const resultados = obtenerDatosMayoresAlPromedio(datosIngresados);
    console.log("Promedio:", resultados.promedio);
    console.log("Datos mayores que el promedio:", resultados.datosMayoresAlPromedio.length);
}
