document.addEventListener('DOMContentLoaded', function () {
    // Lista de juegos
    const juegos = [
        { id: 1, nombre: "League of Legends", descripcion: "MOBA competitivo con más de 150 campeones.", precio: 0, visitas: 1200000 },
        { id: 2, nombre: "Valorant", descripcion: "Shooter táctico en primera persona con agentes únicos.", precio: 0, visitas: 950000 },
        { id: 3, nombre: "Rocket League", descripcion: "Fútbol con autos propulsados por cohetes.", precio: 19.99, visitas: 800000 },
        { id: 4, nombre: "Cyberpunk 2077", descripcion: "RPG de mundo abierto en una ciudad futurista.", precio: 49.99, visitas: 1500000 },
        { id: 5, nombre: "The Witcher 3", descripcion: "RPG épico con historia profunda.", precio: 29.99, visitas: 2000000 },
        { id: 6, nombre: "Fortnite", descripcion: "Battle royale con construcción creativa.", precio: 0, visitas: 3000000 },
        { id: 7, nombre: "Minecraft", descripcion: "Mundo abierto con bloques y creatividad ilimitada.", precio: 26.95, visitas: 2500000 },
        { id: 8, nombre: "GTA V", descripcion: "Acción y aventuras en mundo abierto.", precio: 29.99, visitas: 2200000 },
        { id: 9, nombre: "Apex Legends", descripcion: "Battle royale con personajes únicos.", precio: 0, visitas: 1800000 },
        { id: 10, nombre: "Among Us", descripcion: "Juego social de deducción.", precio: 4.99, visitas: 900000 },
        { id: 11, nombre: "Elden Ring", descripcion: "RPG de acción en mundo abierto.", precio: 59.99, visitas: 1600000 },
        { id: 12, nombre: "Dota 2", descripcion: "MOBA estratégico competitivo.", precio: 0, visitas: 1700000 },
        { id: 13, nombre: "Counter Strike 2", descripcion: "Shooter táctico competitivo.", precio: 0, visitas: 2000000 },
        { id: 14, nombre: "Overwatch 2", descripcion: "Shooter de equipos con héroes únicos.", precio: 0, visitas: 1500000 },
        { id: 15, nombre: "Hades", descripcion: "Roguelike de acción intensa.", precio: 24.99, visitas: 600000 },
        { id: 16, nombre: "Stardew Valley", descripcion: "Simulador de granja encantador.", precio: 14.99, visitas: 800000 },
        { id: 17, nombre: "Hollow Knight", descripcion: "Juego de acción y aventura en un reino subterráneo.", precio: 14.99, visitas: 750000 },
        { id: 18, nombre: "Celeste", descripcion: "Juego de plataformas con narrativa emocional.", precio: 19.99, visitas: 400000 },
        { id: 19, nombre: "Dead Cells", descripcion: "Roguelike de plataformas de acción.", precio: 24.99, visitas: 500000 },
        { id: 20, nombre: "Subnautica", descripcion: "Aventura de supervivencia submarina.", precio: 29.99, visitas: 450000 },
        { id: 21, nombre: "Terraria", descripcion: "Aventura de exploración y construcción.", precio: 9.99, visitas: 1200000 },
        { id: 22, nombre: "The Forest", descripcion: "Juego de supervivencia y horror.", precio: 19.99, visitas: 700000 },
        { id: 23, nombre: "No Man's Sky", descripcion: "Aventura espacial de exploración.", precio: 49.99, visitas: 1000000 },
        { id: 24, nombre: "Horizon Zero Dawn", descripcion: "RPG de acción en un mundo postapocalíptico.", precio: 49.99, visitas: 1200000 },
        { id: 25, nombre: "Sekiro: Shadows Die Twice", descripcion: "Juego de acción y sigilo desafiante.", precio: 59.99, visitas: 1100000 },
        { id: 26, nombre: "Resident Evil Village", descripcion: "Juego de terror y supervivencia.", precio: 59.99, visitas: 950000 },
        { id: 27, nombre: "Outlast", descripcion: "Juego de horror psicológico.", precio: 19.99, visitas: 600000 },
        { id: 28, nombre: "Inside", descripcion: "Juego de plataformas y acertijos atmosférico.", precio: 14.99, visitas: 350000 },
        { id: 29, nombre: "Little Nightmares", descripcion: "Juego de aventuras con atmósfera inquietante.", precio: 19.99, visitas: 400000 },
        { id: 30, nombre: "Dark Souls III", descripcion: "RPG de acción en un mundo sombrío.", precio: 49.99, visitas: 1400000 }
    ];

    // Mostrar los juegos al cargar
    mostrarJuegos(juegos);

    // Funciones
    function mostrarJuegos(juegosMostrar) {
        const listaJuegos = document.getElementById('lista-juegos');
        listaJuegos.innerHTML = '';
        juegosMostrar.forEach(juego => {
            const juegoHTML = `
                <div class="juego">
                    <h2>${juego.nombre}</h2>
                    <p>${juego.descripcion}</p>
                    <p><strong>Precio:</strong> $${juego.precio}</p>
                    <p><strong>Visitas:</strong> ${juego.visitas}</p>
                </div>
            `;
            listaJuegos.innerHTML += juegoHTML;
        });
    }

    window.filtrarPorPrecio = function () {
        const precioMaximo = parseFloat(document.getElementById('filtroPrecio').value);
        if (isNaN(precioMaximo)) {
            alert('Por favor, ingresa un precio válido.');
            return;
        }
        const filtrados = juegos.filter(j => j.precio <= precioMaximo);
        mostrarJuegos(filtrados);
    }

    window.ordenarPorNombre = function () {
        const ordenados = [...juegos].sort((a, b) => a.nombre.localeCompare(b.nombre));
        mostrarJuegos(ordenados);
    }

    window.ordenarPorPrecio = function () {
        const ordenados = [...juegos].sort((a, b) => a.precio - b.precio);
        mostrarJuegos(ordenados);
    }
});
