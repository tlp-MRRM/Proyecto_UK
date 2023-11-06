import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export const About = () => {
    return (
        <>
            <header id="cabecera" className="d-flex justify-content-between">
                <nav aria-label="breadcrumb d-flex align-content-center">
                    <ol className="breadcrumb p-2 ps-3 m-0">
                        <li className="breadcrumb-item">
                            <a className="navbar-brand" href="/">
                                <div className="logo"></div>
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Acerca de nosotros</li>
                    </ol>
                </nav>
                <div className="preguntas-frecuentes">
                    <a href="/preguntas">
                        <img src="../public/img/question-mark-vector-icon.png" style={{ width: '30px' }} alt="Ayuda" />
                    </a>
                </div>
            </header>
            <main className="d-flex justify-content-center">
                <div className="w-50 pt-5 flex-column justify-content-center align-content-center texto">
                    <h1 className="pb-3">Acerca de nosotros</h1>
                    En UK, nuestra misión es proporcionar una plataforma integral que conecte a estudiantescon instituciones
                    educativas de calidad. Creemos en el poder transformador de la
                    educación y estamos comprometidos a facilitar el acceso a oportunidades educativas que impulsen el crecimiento
                    personal y profesional. <br></br> <br></br>

                    Nuestra plataforma ofrece a los usuarios una experiencia única y personalizada, permitiéndoles explorar y
                    comparar una amplia gama de instituciones educativas, desde universidades y escuelas técnicas hasta institutos
                    especializados y centros de formación profesional. Queremos que cada estudiante encuentre la institución
                    perfecta que se alinee con sus intereses, metas y estilo de aprendizaje. <br></br> <br></br>

                    Lo que nos distingue es nuestro enfoque en la calidad y la transparencia. Trabajamos arduamente para verificar y
                    acreditar las instituciones que forman parte de nuestra plataforma, asegurándonos de que cumplan con los
                    estándares educativos más altos. Nuestro objetivo es proporcionar información completa y confiable sobre cada
                    institución, lo que permite a los usuarios tomar decisiones informadas y acertadas sobre su futuro educativo.
                    <br></br> <br></br>

                    Nos enorgullecemos de ser un equipo apasionado y comprometido con la excelencia en el servicio al cliente.
                    Nuestro equipo está siempre dispuesto a ayudar a los estudiantes y profesionales a lo largo de su proceso de
                    búsqueda y selección, brindando asistencia personalizada y respondiendo a todas sus preguntas. <br></br> <br></br>

                    En UK, creemos en el potencial ilimitado de cada individuo. Nuestra visión es crear un
                    ecosistema educativo en línea que inspire el aprendizaje, fomente el desarrollo académico y profesional, y
                    empodere a las personas para que alcancen sus sueños y aspiraciones. <br></br> <br></br>

                    Gracias por unirte a nosotros en este emocionante viaje educativo. Te invitamos a explorar nuestra plataforma,
                    descubrir nuevas oportunidades y hacer realidad tus metas educativas. ¡Estamos aquí para apoyarte en cada paso
                    del camino! <br></br><br></br>

                    ¡Únete a UK y prepárate para un futuro lleno de éxito y crecimiento! <br></br><br></br>

                    Equipo de University of Knowledge <br></br>
                </div>
            </main>
        </>
    )
}
