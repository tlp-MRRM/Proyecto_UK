import React from "react";
import styles from "../../../public/css/editInstitute.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export const EditInstitutePage = () => {
    return (
        <main className="conteiner">
            <article>
                <div className="row">
                    <div className="col-md-auto">
                        <img
                            className="shadow p-3 mb-5 bg-body-tertiary border-rounded-1 "
                            src="/img/home/UNAF.jpg"
                            width="275px"
                        />
                    </div>
                    <div className="col">
                        <h1>Nombre de la institución</h1>
                        <h5>
                            <a className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                            </svg></a> Ubicación
                        </h5>
                    </div>
                </div>

                <br />

                <h3>Estadisticas del perfil</h3>
                <div className="row">
                    <div className="col-3">
                        <div className="bg-secondary">
                            <div className="vector">
                                {" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-circle-check"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="#ffffff"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                    <path d="M9 12l2 2l4 -4" />
                                </svg>{" "}
                            </div>
                            <p className="card-text">Estudiantes Activos.</p>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="vector">
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-eye"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                            </svg>{" "}
                            <div className="bg-secondary">
                                <p className="card-text">
                                    Visualizaciones en los ultimos 7 dias.
                                </p>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="vector">
                                {" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-bookmark"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="#ffffff"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                                </svg>{" "}
                            </div>
                            <div className="bg-secondary">
                                <p className="card-text">ofertas academicas</p>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <h3>Información Básica</h3>

                <div>
                    <div className="col-6">
                        <div className="col-md-auto align-item-center vector">
                            <a className={styles.icon}>
                                {" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-map-pin"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="#ffffff"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg>{" "}
                            </a>
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
                            <a className={styles.icon}>
                                {" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-phone"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="#ffffff"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                </svg>{" "}
                            </a>
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
                        <a className={`edit bg-zinc ${styles.icon}`}>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-pencil"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                            </svg>{" "}
                        </a>
                        <a className={styles.icon}>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-trash"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>{" "}
                        </a>{" "}
                        Nombre de una carrera
                    </h5>
                    <h5>
                        <a className={`edit bg-zinc ${styles.icon}`}>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-pencil"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                            </svg>{" "}
                        </a>
                        <a className={styles.icon}>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-trash"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>{" "}
                        </a>{" "}
                        Nombre de una carrera
                    </h5>
                    <h5>
                        <a className={`edit bg-zinc ${styles.icon}`}>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-pencil"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                            </svg>{" "}
                        </a>
                        <a className={styles.icon}>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-trash"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>{" "}
                        </a>{" "}
                        Nombre de una carrera
                    </h5>
                </div>
                <button>Ver todas</button>

                <h3>Carreras</h3>
                <div className="mt-5 mb-5">
                    <h5>
                        <a className={`edit bg-zinc ${styles.icon}`}>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-pencil"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                            </svg>{" "}
                        </a>
                        <a className="">
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-trash"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>{" "}
                        </a>{" "}
                        Nombre de una carrera
                    </h5>
                    <h5>
                        <a className={`edit bg-zinc ${styles.icon}`}>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-pencil"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                            </svg>{" "}
                        </a>
                        <a className={styles.icon}>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-trash"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>{" "}
                        </a>{" "}
                        Nombre de una carrera
                    </h5>
                    <h5>
                        <a className={`edit bg-zinc ${styles.icon}`}>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-pencil"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                            </svg>{" "}
                        </a>
                        <a className={styles.icon}>
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-trash"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="#ffffff"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>{" "}
                        </a>{" "}
                        Nombre de una carrera
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
    );
};
