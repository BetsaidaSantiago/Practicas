function obtenerGanador(partido) {
    // Simular el resultado del partido, por ejemplo, de manera aleatoria
    const resultado = Math.random() < 0.5 ? partido[0] : partido[1];
    console.log(`El ganador del partido entre ${partido[0]} y ${partido[1]} es: ${resultado}`);
    return resultado;
}

function realizarCampeonato(equipos) {
    // Mientras haya más de un equipo en la lista, seguir con los partidos
    while (equipos.length > 1) {
        const nuevosEquipos = [];
        // Emparejar equipos y obtener ganadores
        for (let i = 0; i < equipos.length; i += 2) {
            const partido = [equipos[i], equipos[i + 1]];
            const ganador = obtenerGanador(partido);
            nuevosEquipos.push(ganador);
        }
        // Actualizar la lista de equipos para la siguiente ronda
        equipos = nuevosEquipos;
    }
    // El último equipo en la lista es el campeón
    console.log(`¡${equipos[0]} es el campeón del torneo!`);
}

// Preguntar al usuario por los nombres de los equipos
const equipos = [];
for (let i = 1; i <= 8; i++) {
    const nombreEquipo = prompt(`Ingrese el nombre del equipo ${i}:`);
    equipos.push(nombreEquipo);
}

// Iniciar el campeonato
realizarCampeonato(equipos);
