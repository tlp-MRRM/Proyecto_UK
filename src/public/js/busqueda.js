import { universidad1, universidad2 } from "../../front/busqueda/models/universidad.js";
const arrayUniversidades = [universidad1, universidad2];

const resultados = document.getElementById("resultados")    
const btnBuscar = document.getElementById("btnBuscar");

function calcularSimilitud(texto1, texto2) {
    const set1 = new Set(texto1.split(" "));
    const set2 = new Set(texto2.split(" "));

    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    const similitud = intersection.size / union.size;
    return similitud 
}

btnBuscar.addEventListener('click', (event) => {
    event.preventDefault();
    const textoBusqueda = document.getElementById("busqueda").value.toLowerCase();
    const respuesta = arrayUniversidades.filter((resultado) => {
        const similitud = calcularSimilitud(textoBusqueda, resultado.name.toLowerCase());

        const umbralSimilitud = 0.5;

        return similitud >= umbralSimilitud;
    })
    if (respuesta.length > 0) {
        resultados.innerHTML = "";
        respuesta.forEach(resultado => {
            resultados.innerHTML += `<p>${resultado.name}</p>
        <a class="verMasUniv" href="../profile/school/school.html">Mas información</a>`;
        });
        
    } 
    else {
        resultados.innerHTML = `<p>No se encontró la universidad</p>`;
    }
})
