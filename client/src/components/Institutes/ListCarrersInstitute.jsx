function ListCarrersInstitute() {
  return (
    <>
      <div className="listadocarrera m-4">
        <div className="carrera">
          <h3>Ingeniería en sistemas</h3>
          <p>Años de Duración: 4</p>
          <p>Modalidad: Presencial</p>
          <button type="button" className="btn btn-secondary btn-sm boton mb-4">
            <a href="">Ver más</a>
          </button>
        </div>
        <div className="carrera">
          <h3>Técnico en Programación Web</h3>
          <p>Años de Duración: 3</p>
          <p>Modalidad: Virtual</p>
          <button type="button" className="btn btn-secondary btn-sm boton mb-4">
            <a href="">Ver más</a>
          </button>
        </div>
        <div className="carrera">
          <h3> Licenciatura en Administración de Empresas</h3>
          <p>Años de Duración: 5</p>
          <p>Modalidad: Semipresencial</p>
          <button type="button" className="btn btn-secondary btn-sm boton mb-4">
            <a href="">Ver más</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default ListCarrersInstitute;
