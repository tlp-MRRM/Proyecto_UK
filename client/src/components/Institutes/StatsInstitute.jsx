function StatsInstitute() {
  return (
    <>
      <h3>Estadisticas del perfil</h3>
      <div class="row">
        
        <div class="col-3">
          <div class="bg-secondary">
            <div class="vector">
              <a class="material-symbols-outlined"> check </a>
            </div>
            <p class="card-text">Estudiantes Activos.</p>
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="bg-secondary">
        <div class="vector">
          <a class="material-symbols-outlined"> visibility </a>
        </div>
          <p class="card-text">Visualizaciones en los ultimos 7 dias.</p>
        </div>
      </div>

      <div class="col-3">
        <div class=" bg-secondary">
        <div class="vector">
          <a class="material-symbols-outlined"> bookmark </a>
        </div>
          <p class="card-text">ofertas academicas</p>
        </div>
      </div>
    </>
  );
}

export default StatsInstitute;
