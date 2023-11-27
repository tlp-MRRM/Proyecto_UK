
export const PageInstitute = () => {

    return (
        <>

            <main className="conteiner p-3">
                <article>
                    <div className="row">
                        <div className="col-md-auto">
                            <img className="shadow p-3 mb-5 bg-body-tertiary border-rounded-1 " src="/img/home/UNAF.jpg" width="275px" />
                        </div>
                        <div className="col">
                            <h1>Nombre de la institución</h1>
                            <h5><a className="material-symbols-outlined text-black text-black">location_on</a> Ubicación</h5>
                        </div>
                    </div>

                    <br />

                    <h3>Estadisticas del perfil</h3>
                    <div className="row">
                        <div className="col-3">
                            <div className="bg-secondary">
                                <div className="vector">
                                    <a className="material-symbols-outlined text-black"> check </a>
                                </div>
                                <p className="card-text">Estudiantes Activos.</p>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="vector">
                                <a className="material-symbols-outlined text-black"> visibility </a>
                            </div>
                            <div className="bg-secondary">
                                <p className="card-text">Visualizaciones en los ultimos 7 dias.</p>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="vector">
                                <a className="material-symbols-outlined text-black"> bookmark </a>
                            </div>
                            <div className="bg-secondary">
                                <p className="card-text">ofertas academicas</p>
                            </div>
                        </div>
                    </div>

                    <br />
                    <h3>Información Básica</h3>

                    <div>
                        <div className="col-6">
                            <div className="col-md-auto align-item-center vector">
                                <a className="material-symbols-outlined text-black"> pin_drop </a>
                            </div>
                            <div className="col bg-secondary">
                                <h1>Ubicación</h1>
                                <p>Formosa, Formosa, Argentina, Ruta Nac. 81 km. 1190</p>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div>
                        <div className="col-6">
                            <div className="col-md-auto align-item-center vector">
                                <a className="material-symbols-outlined text-black"> call </a>
                            </div>
                            <div className="col bg-secondary">
                                <h1>Contacto</h1>
                                <p>Telefono: 370567891</p>
                                <p>Email: contacto@gmail.com</p>
                                <p>Web: http://www.google.com</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article>
                    <h3>Facultades</h3>

                    <div className="mt-5 mb-5">
                        <h5>
                            <a className="edit material-symbols-outlined text-black bg-zinc"> edit </a>
                            <a className="material-symbols-outlined text-black"> delete </a> Nombre de una carrera
                        </h5>
                        <h5>
                            <a className="edit material-symbols-outlined text-black bg-zinc"> edit </a>
                            <a className="material-symbols-outlined text-black"> delete </a> Nombre de una carrera
                        </h5>
                        <h5>
                            <a className="edit material-symbols-outlined text-black bg-zinc"> edit </a>
                            <a className="material-symbols-outlined text-black"> delete </a> Nombre de una carrera
                        </h5>
                    </div>
                    <button>Ver todas</button>

                    <h3>Carreras</h3>
                    <div className="mt-5 mb-5">
                        <h5>
                            <a className="edit material-symbols-outlined text-black bg-zinc"> edit </a>
                            <a className="material-symbols-outlined text-black"> delete </a> Nombre de una carrera
                        </h5>
                        <h5>
                            <a className="edit material-symbols-outlined text-black bg-zinc"> edit </a>
                            <a className="material-symbols-outlined text-black"> delete </a> Nombre de una carrera
                        </h5>
                        <h5>
                            <a className="edit material-symbols-outlined text-black bg-zinc"> edit </a>
                            <a className="material-symbols-outlined text-black"> delete </a> Nombre de una carrera
                        </h5>
                    </div>
                    <button>Ver todas</button>

                    <h3>Galeria de imagenes</h3>
                    <img src="..." className="img-thumbnail" alt="..." />
                    <img src="..." className="img-thumbnail" alt="..." />
                    <img src="..." className="img-thumbnail" alt="..." />
                    <img src="..." className="img-thumbnail" alt="..." />
                    <img src="..." className="img-thumbnail" alt="..." />
                    <button>Ver todas</button>
                </article>
            </main>

        </>
    )
}