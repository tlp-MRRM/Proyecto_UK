//page not found con gif de error
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export const PageNotFound = () => {
    return (
        <body className='bodyCenter'>
            <main className='mainCenter'>
                <h2 className="pagenot">
                    ¡Oh no! Parece que te has perdido. La página que buscas no está disponible. Revisa la URL o vuelve a la página de inicio. ¡Buena suerte en tu búsqueda! 🌐🔍
                </h2>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <img src="/img/404.gif" alt="404" className='img-fluid' />
                        </div>
                    </div>
                </div>

            </main>
            <div className='botonHome'>
                        <a href='/' className='btn btn-dark btn-lg'>
                            <i className="bi bi-house-door-fill"></i>
                            Volver al inicio
                        </a>
                    </div>
        </body>
    )
}




