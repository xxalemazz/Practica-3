async function Api() {
    const Resultados = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const Datos = await Resultados.json();
    console.log (Datos)
}
Api();
const div = document.getElementById("Datos");
div.innerHTML = `
  <h2>${Datos.name.toUpperCase()}</h2>
  <p><strong>Peso:</strong> ${Datos.weight}</p>
  <p><strong>Altura:</strong> ${Datos.height}</p>
  <img src="${Datos.sprites.front_default}" alt="${Datos.name}">
`;
