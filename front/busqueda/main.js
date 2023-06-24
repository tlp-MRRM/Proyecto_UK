const univDestacadas = document.getElementById('univDest')

import { universidad1, universidad2 } from "./models/universidad.js"
univDestacadas.innerHTML = `<h1>Universidades Destacadas</h1>
<div class='universidadDestacada'>
    <h2>${universidad1.name}</h2>
    <h4>Carreras Destacadas</h4>
    <div class='carreraDestacada'>
        ${universidad1.academicPrograms.carrerasDeGradoYPregrado.facultadDeArteDisenioComunicacion.licEnDisenioGrafico.name} <br>
        Duración: ${universidad1.academicPrograms.carrerasDeGradoYPregrado.facultadDeArteDisenioComunicacion.licEnDisenioGrafico.duration} años <br>
        <button class="btn-verMas">Ver Mas</button>
    </div>
    <div class='carreraDestacada'>
        ${universidad1.academicPrograms.carrerasDeGradoYPregrado.facultadDeArteDisenioComunicacion.licEnPublicidad.name} <br>
        Duración: ${universidad1.academicPrograms.carrerasDeGradoYPregrado.facultadDeArteDisenioComunicacion.licEnPublicidad.duration} años <br>
        <button class="btn-verMas">Ver Mas</button>
    </div>
</div>
<div class="universidadDestacada">
    <h2>${universidad2.name}</h2>
    <h4>Carreras Destacadas</h4>
    <div class='carreraDestacada'>
        ${universidad2.academicPrograms.carrerasDeGradoYPregrado.facuEconomiaYNegocios.ContadorPublico.name} <br>
        Duración: ${universidad2.academicPrograms.carrerasDeGradoYPregrado.facuEconomiaYNegocios.ContadorPublico.duration} años.
        <button class="btn-verMas">Ver Mas</button>
    </div>
</div>`
