import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export const RegisterCareer = () => {
    return (
        <>
            <main className="container d-flex justify-content-center align-items-center">
                <form className="formAgregarCarrera p-3" id="formAgregarCarrera">
                    <h2 className="mb-3 text-center">Agregar una nueva carrera</h2>
                    <div className="mb-3">
                        <label htmlFor="facultad" className="form-label">Facultad de la carrera</label>
                        <input type="text" placeholder="Facultad de **** " className="form-control" id="facultad" />
                    </div>
                    <label htmlFor="name" className="form-label">Nombre de la carrera</label>
                    <div className="mb-3">
                        <input type="text" className="form-control inputNombreCarrera" placeholder="Ingeniería en *****" id="name" />
                    </div>

                    <div className="mb-3 apartado2">
                        <div className="me-3 start_date">
                            <label htmlFor="start_date" className="form-label">Fecha de inicio</label>
                            <input type="date" className="form-control" id="start_date" />
                        </div>

                        <div className="me-3 duracion">
                            <label htmlFor="duration" className="form-label">Duración</label>
                            <input type="number" className="form-control" id="duration" placeholder="*" />
                        </div>

                    </div>

                    <div className="mb-3">
                        <label htmlFor="finalTitle" className="form-label">Título intermedio</label>
                        <input type="text" placeholder="Tecnico en ****" className="form-control" id="finalTitle" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="finalTitle" className="form-label">Título final</label>
                        <input type="text" placeholder="Ingeniero en ****" className="form-control" id="finalTitle" />
                    </div>
                    <div className="d-flex justify-content-end">
                        <a className="btn btn-danger me-2" href='/instituto/:id'>Cancelar</a>
                        <button type="submit" className="btn btn-success">Agregar</button>
                    </div>

                </form>
            </main>
        </>
    )
}
