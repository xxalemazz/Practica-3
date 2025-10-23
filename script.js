async function Api() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const Datos = await res.json();

    document.querySelector(".Nombre").textContent = Datos.name.toUpperCase();

    document.querySelector(".Estadisticas").innerHTML = `
        <p>Peso: ${Datos.weight}</p>
        <p>Altura: ${Datos.height}</p>
        <p>Base Experience: ${Datos.base_experience}</p>
    `;

    const habilidadesDiv = document.querySelector(".Habilidades");
    habilidadesDiv.innerHTML = "<h3>Habilidades:</h3>";
    Datos.abilities.forEach(a => {
        const p = document.createElement("p");
        p.textContent = `${a.ability.name} ${a.is_hidden ? "(Oculta)" : ""}`;
        habilidadesDiv.appendChild(p);
    });

    const objetosDiv = document.querySelector(".objetos");
    objetosDiv.innerHTML = "<h3>Objetos:</h3>";
    if(Datos.held_items.length === 0){
        objetosDiv.innerHTML += "<p>No hay objetos</p>";
    } else {
        Datos.held_items.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item.item.name;
            objetosDiv.appendChild(p);
        });
    }

    const tiposDiv = document.querySelector(".Tipos");
    tiposDiv.innerHTML = "<h3>Tipos:</h3>";
    Datos.types.forEach(tipo => {
        const p = document.createElement("p");
        p.textContent = tipo.type.name;
        tiposDiv.appendChild(p);
    });

    const movimientosDiv = document.querySelector(".Movimientos");
    movimientosDiv.innerHTML = "<h3>Movimientos:</h3>";
    Datos.moves.slice(0, 5).forEach(move => {
        const p = document.createElement("p");
        p.textContent = move.move.name;
        movimientosDiv.appendChild(p);
    });

    const enlacesDiv = document.querySelector(".enlaces");
    enlacesDiv.innerHTML = `<p>Especie URL: <a href="${Datos.species.url}" target="_blank">${Datos.species.url}</a></p>`;
}

document.addEventListener("DOMContentLoaded", Api);
