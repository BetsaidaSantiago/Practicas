function esCuadradoMagico(matriz) {
    const n = matriz.length;

    // Verificar si la matriz es cuadrada
    if (!matriz.every(fila => fila.length === n)) {
        return false;
    }

    // Calcular la suma esperada de cada fila, columna y diagonal
    const sumaEsperada = n * (n * n + 1) / 2;

    // Verificar las filas y columnas
    for (let i = 0; i < n; i++) {
        let sumaFila = 0;
        let sumaColumna = 0;
        for (let j = 0; j < n; j++) {
            sumaFila += matriz[i][j];
            sumaColumna += matriz[j][i];
        }
        if (sumaFila !== sumaEsperada || sumaColumna !== sumaEsperada) {
            return false;
        }
    }

    // Verificar la diagonal principal
    let sumaDiagonalPrincipal = 0;
    for (let i = 0; i < n; i++) {
        sumaDiagonalPrincipal += matriz[i][i];
    }
    if (sumaDiagonalPrincipal !== sumaEsperada) {
        return false;
    }

    // Verificar la diagonal secundaria
    let sumaDiagonalSecundaria = 0;
    for (let i = 0; i < n; i++) {
        sumaDiagonalSecundaria += matriz[i][n - 1 - i];
    }
    return sumaDiagonalSecundaria === sumaEsperada;
}


const cuadradoMagico = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

if (esCuadradoMagico(cuadradoMagico)) {
    console.log("Es un cuadrado mágico.");
} else {
    console.log("No es un cuadrado mágico.");
}
