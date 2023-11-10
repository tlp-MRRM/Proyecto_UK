import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export const RegisterInstitute = () => {
    return (
        <>
            <main className='container d-flex justify-content-center align-items-center'>
                <form className="formAgregarInstituto p-3 needs-validation" noValidate id="formAgregarInstituto"
                    data-id="<%- id_user %>">
                    <h2 className="">Registra tu institución</h2>
                    <div className="nombres mb-3">
                        <div className="nombre me-3">
                            <label htmlFor="name" className="form-label">Nombre de la institución</label>
                            <input type="text" placeholder="Instituto politecnico" className="form-control" name="name" />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div>
                            <label htmlFor="abbreviation" className="form-label">Abreviatura</label>
                            <div className="">
                                <input type="text" className="form-control needs-validation" placeholder="IPF" name="abbreviation"
                                    id="abbreviation" />
                                <div className="valid-feedback">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <label htmlFor="year_fundation" className="form-label">Año de fundación </label>
                        <input type="number" className="form-control" id="year_fundation" placeholder="2021"
                            name="year_fundation" />
                    </div>
                    <div className="mt-3 mb-3">
                        <label htmlFor="description" className="form-label">Descripción breve de la institucion (max. 255
                            caracteres)</label>
                        <input type="text" name="description" id="description" className="form-control" />
                    </div>
                    <div className="d-flex justify-content-end">
                        <a className="btn btn-danger me-2" href='/'>Cancelar</a>
                        <button type="submit" className="btn btn-success" id="btnRegistrar">Registrar</button>
                    </div>

                </form>
            </main>
            <script src="/js/registerInstitute.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        </>
    )
}
