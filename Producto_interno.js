// Función para calcular el producto interno de dos vectores
function productoInterno(a, b) {
    if (a.length !== b.length) {
        throw new Error("Los vectores deben tener la misma longitud.");
    }

    let resultado = 0;
    for (let i = 0; i < a.length; i++) {
        resultado += a[i] * b[i];
    }

    return resultado;
}

// Función para verificar si dos vectores son ortogonales
function sonOrtogonales(a, b) {
    return productoInterno(a, b) === 0;
}

// Vectores de ejemplo
const vectorA = [1, 2, 3];
const vectorB = [-1, 0, 1];

// Calcular y mostrar el producto interno
console.log("Producto Interno de A y B:", productoInterno(vectorA, vectorB));

// Verificar si los vectores son ortogonales
if (sonOrtogonales(vectorA, vectorB)) {
    console.log("A y B son vectores ortogonales.");
} else {
    console.log("A y B no son vectores ortogonales.");
}
