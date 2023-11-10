import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const WorkWithUs = () => {
    return (
        <>

            <main className="container d-flex justify-content-center align-items-center">
                <form>
                    <h2>Trabaja con nosotros</h2>
                    <div className="mb-3">
                        <label htmlFor="Nombre y apellido" className="form-label">Nombre y apellido</label>
                        <input type="text" className="form-control" id="Nombre y apellido" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="DNI" className="form-label">DNI</label>
                        <input type="text" className="form-control" id="DNI" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="declaracionJurada" className="form-label">Comisión Nacional de Evaluación y Acreditación Universitaria Formato PDF</label>
                        <input type="file" className="form-control" id="declaracionJurada" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Dirección de correo electrónico</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="number" className="form-control" id="telefono" />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-success">Enviar</button>
                    </div>
                </form>
            </main>
        </>
    );
};
