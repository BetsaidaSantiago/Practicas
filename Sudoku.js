function esSudokuCorrecto(sudoku) {
    // Verificar filas
    for (let i = 0; i < 9; i++) {
        const fila = sudoku[i];
        if (!esConjuntoValido(fila)) {
            return false;
        }
    }

    // Verificar columnas
    for (let i = 0; i < 9; i++) {
        const columna = [];
        for (let j = 0; j < 9; j++) {
            columna.push(sudoku[j][i]);
        }
        if (!esConjuntoValido(columna)) {
            return false;
        }
    }

    // Verificar regiones
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const region = [];
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    region.push(sudoku[x][y]);
                }
            }
            if (!esConjuntoValido(region)) {
                return false;
            }
        }
    }

    // Si todas las verificaciones pasan, el Sudoku es correcto
    return true;
}

function esConjuntoValido(conjunto) {
    const numerosVistos = new Set();
    for (const numero of conjunto) {
        if (numerosVistos.has(numero)) {
            return false; // Elemento repetido
        }
        numerosVistos.add(numero);
    }
    return true;
}

// Ejemplo de uso
const sudokuCorrecto = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const sudokuIncorrecto = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 5] // Número repetido en la última fila
];

console.log("El Sudoku correcto es:", esSudokuCorrecto(sudokuCorrecto)); // Debería imprimir true
console.log("El Sudoku incorrecto es:", esSudokuCorrecto(sudokuIncorrecto)); // Debería imprimir false
