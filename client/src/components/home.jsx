import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '/public/css/home.css'
import styles from '../..//public/css/home.module.css'

export const Home = () => {
    return (
        <>
            <h1 className="title text-center">Bienvenido a University of Knowledge</h1>
            <main>
                <div className={styles.home}>
                    <section className="section mt-2 mb-2 text-center">
                        <img src="../public/img/Institute.png" alt="Institute" width="300" />
                        <p className="p-3 m-0">
                            Tu fuente confiable de información académica actualizada. Descubre oportunidades de estudio, carreras y
                            recursos para tu éxito educativo. ¡Explora y forja tu camino hacia un futuro prometedor en el mundo del conocimiento!
                        </p>
                    </section>
                    <section>
                        <article className=" mt-5 mb-5">
                            <h2>Algunas reseñas</h2>

                            <div className="card reseña mt-2 mb-2">
                                <div className="card-body">
                                    <h5 className="card-title">Juan Pérez</h5>
                                    ⭐⭐⭐⭐⭐
                                    <p className="card-text">
                                        La plataforma me dio una mano para lidiar con la presión de mi vieja.
                                        No sabía qué estudiar, hasta pensé en ir por contador como hacen los
                                        que no saben que estudiar, por suerte encontré orientación aquí de las
                                        carreras e instituciones disponibles. Me evitó dramas y me ayudó a
                                        encontrar mi vocación. Recomendadadisíma a más no poder
                                    </p>
                                </div>
                            </div>

                            <div className="card reseña mt-2 mb-2">
                                <div className="card-body">
                                    <h5 className="card-title">Laura Gómez</h5>
                                    ⭐⭐⭐⭐⭐
                                    <p className="card-text">
                                        Estaba perdido sin saber qué estudiar, pero esta plataforma me salvó.
                                        Encontré cursos de diferentes áreas y descubrí mi pasión. Ahora sé qué
                                        carrera seguir gracias a esta plataforma que me orientó y me dio las
                                        herramientas para tomar una decisión segura. ¡No puedo estar más
                                        agradecido!
                                    </p>
                                </div>
                            </div>

                            <div className="card reseña mt-2 mb-2">
                                <div className="card-body">
                                    <h5 className="card-title">Martín Rodríguez</h5>
                                    ⭐⭐⭐⭐⭐
                                    <p className="card-text">
                                        La verdad, esta plataforma me ayudó un montón a salir de la
                                        indecisión y encontrar mi camino. Con toda la información sobre
                                        carreras y opciones educativas, pude tomar decisiones más seguras.
                                        Ahora sé qué rumbo quiero seguir y la recomendaría a cualquiera que
                                        necesite orientación en su vocación.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}
