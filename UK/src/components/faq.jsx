import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Faq = () => {
    return (
        <>
            <header id="cabecera" className="d-flex justify-content-between align-content-center">
                <nav aria-label="breadcrumb d-flex align-content-center">
                    <ol className="breadcrumb p-2 m-0 ps-3 d-flex justify-content-between">
                        <li className="breadcrumb-item">
                            <a className="navbar-brand" href="/">
                                <div className="logo"></div>
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Preguntas frecuentes</li>
                    </ol>
                </nav>
                <div className="preguntas-frecuentes">
                    <a href="/preguntas"><img src="../public/img/question-mark-vector-icon.png" style={{ width: '30px' }} alt="Ayuda" />
                    </a>
                </div>
            </header>

            <main>
                <div className="container mt-3">
                    <h2>Preguntas Frecuentes</h2>


                    <div id="accordion">
                        <div className="card">
                            <div className="card-header">
                                <a className="btn" data-bs-toggle="collapse" href="#collapseOne">
                                    ¿Qué es UK y cómo puedo beneficiarme de ella?
                                </a>
                            </div>
                            <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                <div className="card-body">
                                    UK (University of Knowledge) es una herramienta en línea que reúne información sobre diversas
                                    instituciones
                                    educativas, como universidades, institutos y centros de formación. Su objetivo principal es ayudar a los
                                    usuarios a explorar, comparar y tomar decisiones informadas sobre las instituciones que mejor se adapten a
                                    sus
                                    necesidades educativas.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                                    ¿Qué tipo de instituciones están disponibles en la plataforma?
                                </a>
                            </div>
                            <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">
                                    En la plataforma, puedes encontrar una amplia gama de instituciones educativas más allá de los colegios
                                    secundarios y primarias. Algunos ejemplos de las instituciones que podrías encontrar son: <br></br>

                                    <strong>Universidades:</strong> Tanto universidades públicas como privadas, ofreciendo programas de pregrado,
                                    posgrado y
                                    doctorado en una variedad de disciplinas académicas. <br></br>

                                    <strong>Institutos Técnicos y Tecnológicos:</strong> Instituciones especializadas en programas de formación
                                    técnica y
                                    tecnológica, brindando capacitación en campos como la ingeniería, la informática, la tecnología de la
                                    información, la electrónica, entre otros. <br></br>

                                    <strong>Escuelas de Negocios:</strong> Instituciones que se centran en ofrecer programas relacionados con la
                                    gestión
                                    empresarial,
                                    el comercio, las finanzas, el marketing y otros aspectos relacionados con el mundo de los negocios. <br></br>

                                    <strong>Escuelas de Arte y Diseño:</strong> Instituciones dedicadas a ofrecer programas de formación en áreas
                                    artísticas
                                    como
                                    bellas artes, diseño gráfico, diseño de moda, diseño de interiores, entre otros. <br></br>

                                    <strong>Instituciones de Educación Superior Especializada:</strong> Estas pueden incluir escuelas de medicina,
                                    escuelas de
                                    derecho, escuelas de ingeniería, escuelas de ciencias de la salud y otras instituciones enfocadas en
                                    campos
                                    específicos. <br></br>

                                    <strong>Centros de Formación Profesional:</strong> Instituciones que brindan programas de capacitación y
                                    formación en habilidades específicas, como la gastronomía, la carpintería, la soldadura, la estética,
                                    entre otros oficios y
                                    profesiones. <br></br>

                                    Es importante destacar que la disponibilidad y el tipo de instituciones pueden variar según la ubicación
                                    geográfica y el alcance de la plataforma. Recuerda que cada institución tiene sus propias características,
                                    requisitos de admisión y programas educativos específicos. Al utilizar la plataforma, podrás explorar y
                                    descubrir las instituciones que se ajusten mejor a tus necesidades y objetivos educativos.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                                    ¿Qué información puedo encontrar de las instituciones?
                                </a>
                            </div>
                            <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">
                                    En el perfil de cada institución en la plataforma, podrás encontrar una variedad de información relevante
                                    que te
                                    ayudará a conocerla mejor. Algunos elementos comunes que podrías encontrar en el perfil de una institución
                                    son: <br></br>

                                    <strong>Descripción general:</strong> Una descripción general que proporciona una visión general de la
                                    institución, su historia,
                                    misión y valores fundamentales. <br></br>

                                    <strong>Programas educativos:</strong> Información detallada sobre los programas educativos ofrecidos por la
                                    institución, como
                                    programas de pregrado, posgrado, programas técnicos y otros programas especializados. <br></br>

                                    <strong>Áreas de estudio:</strong> Una lista de las áreas de estudio o campos académicos en los que la
                                    institución se
                                    especializa, lo que te permite identificar si ofrecen programas relacionados con tus intereses y objetivos
                                    educativos. <br></br>

                                    <strong>Requisitos de admisión:</strong> Información sobre los requisitos de admisión para cada programa
                                    educativo, que pueden
                                    incluir calificaciones académicas, exámenes de ingreso, ensayos, cartas de recomendación y otros
                                    documentos
                                    necesarios para la solicitud. <br></br>

                                    <strong>Ubicación y campus:</strong> Detalles sobre la ubicación de la institución, su campus principal y
                                    otras ubicaciones o
                                    sucursales si las hubiera. También se puede proporcionar información sobre las instalaciones disponibles,
                                    como
                                    bibliotecas, laboratorios, áreas deportivas y otros recursos. <br></br>

                                    <strong>Costos y ayuda financiera:</strong> Información sobre los costos de matrícula y otros gastos
                                    educativos, así como
                                    posibles opciones de ayuda financiera, becas o programas de financiamiento estudiantil disponibles. <br></br>

                                    <strong>Perfil académico:</strong> Detalles sobre la calidad académica de la institución, como
                                    reconocimientos, acreditaciones,
                                    afiliaciones académicas o rankings relevantes. <br></br>

                                    <strong>Testimonios y comentarios:</strong> Algunas plataformas pueden incluir testimonios o comentarios de
                                    estudiantes actuales
                                    o antiguos de la institución, lo que puede brindarte una perspectiva adicional sobre la experiencia
                                    educativa en
                                    esa institución. <br></br>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
                                    ¿Cómo puedo ponerme en contacto con una institución para obtener más información? </a>
                            </div>
                            <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">
                                    Para ponerte en contacto con una institución y obtener más información, hay varias opciones que puedes
                                    encontrar en el perfil de la institución dentro de la seccion contacto: <br></br>

                                    <strong>Sitio web de la institución:</strong> Muchas instituciones tienen su propio sitio web oficial donde ofrecen
                                    información
                                    detallada sobre sus programas, servicios y contacto. <br></br>

                                    <strong>Llamada telefónica:</strong> En el perfil de la institución encontraras un telefono administrativo de contacto,
                                    puedes
                                    llamar
                                    directamente para preguntar y obtener información adicional. <br></br>

                                    <strong>Correo electrónico:</strong> Si tienes preguntas específicas o deseas obtener información por escrito, puedes
                                    enviar un
                                    correo electrónico a la institución utilizando la dirección proporcionada en su perfil. <br></br>

                                    <strong>Formulario de contacto:</strong> Encontraras un formulario de contacto donde tendras que poner tu Nombre y
                                    Apellido,
                                    seguido de tu correo electrónico y tu mensaje para comunicarte con la institución.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFive">
                                    ¿Hay alguna tarifa asociada al uso de la plataforma?
                                </a>
                            </div>
                            <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">
                                    No,UK es completamente gratuita. No hay tarifas asociadas al uso de la plataforma. Puedes aprovechar todas
                                    las funcionalidades y servicios que ofrece la plataforma
                                    sin ningún costo.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseSix">
                                    ¿Tienes una institucion y queres trabajar con nosotros?
                                </a>
                            </div>
                            <div id="collapseSix" className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">
                                    Para que una institución pueda trabajar con nosotros, se requiere seguir un proceso específico. En primer
                                    lugar, la institución debe rellenar un formulario de contacto que se encuentra en la página principal,
                                    debajo
                                    de esta se encuentra un link que dice trabaja con nosotros, que lo llevará al formulario.

                                    Una vez que la institución haya completado el formulario de contacto y haya obtenido la verificación
                                    correspondiente, nos pondremos en contacto utilizando la información de contacto proporcionada por la
                                    institución, ya sea el correo electrónico o el número de teléfono.

                                    Para obtener más detalles sobre cómo trabajar con nosotros y acceder al formulario de contacto, puedes
                                    dirigirte al apartado <a href="/trabaja-con-nosotros">trabaja con nosotros</a> ubicado en el footer de nuestra página principal. Allí
                                    encontrarás la información y los pasos necesarios para iniciar el proceso de colaboración con nuestra
                                    plataforma.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
