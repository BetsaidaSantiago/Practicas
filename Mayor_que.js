// Pide al usuario ingresar una lista de números separados por comas
const numerosTexto = prompt("Ingrese una lista de números separados por comas:");

// Convierte la cadena de texto en un array de números
const numeros = numerosTexto.split(',').map(Number);

// Pide al usuario ingresar el valor x
const x = parseFloat(prompt("Ingrese un valor x para comparar:"));

// Filtra los números mayores que x
const numerosMayoresQueX = numeros.filter(numero => numero > x);

// Muestra el resultado
console.log(`Números mayores que ${x}: ${numerosMayoresQueX}`);
console.log(`Cantidad de números mayores que ${x}: ${numerosMayoresQueX.length}`);
