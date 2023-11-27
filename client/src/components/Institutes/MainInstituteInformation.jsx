const image = "https://robohash.org/21312"

function MainInstituteInformation() {
  return (
    <div className="row">
      <div className="col-md-auto">
        <img className="shadow p-3 mb-5 bg-body-tertiary border-rounded-1 " src={image} width="275px"  />
      </div>
      <div className="col">
        <h1>Nombre de la institución</h1>
        <h5><a className="material-symbols-outlined">location_on</a> Ubicación</h5>
      </div>
    </div>
  )
}


export default MainInstituteInformation
