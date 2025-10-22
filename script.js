async function Api() {
    const Resultados = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const Datos = await Resultados.json();
    console.log (Datos)
}
const div = document.getElementById("Datos");
Api();
