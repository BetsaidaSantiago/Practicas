function generarPotenciasFraccionales(numero, cantidad) {
    const potenciasFraccionales = [];
    for (let i = 1; i <= cantidad; i++) {
        const potencia = 1 / Math.pow(numero, i);
        potenciasFraccionales.push(potencia);
    }
    return potenciasFraccionales;
}

function formatearNumero(numero) {
    // Ajusta la longitud del número decimal a 6 dígitos
    return numero.toFixed(6);
}

// Genera las potencias fraccionales de 2 en forma decimal
const potencias = generarPotenciasFraccionales(2, 7);

// Muestra las tres columnas
console.log("Potencia  |  Fracción  |  Decimal");
console.log("---------------------------------");
for (let i = 0; i < potencias.length; i++) {
    const potencia = formatearNumero(Math.pow(2, -(i + 1)));
    const fraccion = formatearNumero(1 / Math.pow(2, i + 1));
    const decimal = formatearNumero(potencias[i]);

    console.log(`${potencia}  |  ${fraccion}  |  ${decimal}`);
}
