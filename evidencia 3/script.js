const pokemones = [
    { id: "charmander", nombre: "Charmander", habilidad: "Mar Llamas", tipo: "Fuego" },
    { id: "bulbasaur", nombre: "Bulbasaur", habilidad: "Espesura", tipo: "Planta/Veneno" },
    { id: "pikachu", nombre: "Pikachu", habilidad: "Electricidad Estática", tipo: "Eléctrico" }
];

pokemones.forEach(poke => {
    const contenedorInfo = document.getElementById(`info-${poke.id}`);
    contenedorInfo.innerHTML = `
        <h3>${poke.nombre}</h3>
        <p><strong>Habilidad:</strong> ${poke.habilidad}</p>
        <p><strong>Tipo:</strong> ${poke.tipo}</p>
    `;
});
