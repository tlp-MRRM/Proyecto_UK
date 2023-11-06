import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../public/css/filter.css'
export const Search = () => {
    return (
        <>
            <main className="justify-content-center bg-dark">
                <section className="justify-content-center text-light">

                    <div className="container">
                        <form id="search-input">
                            <label htmlFor="name">Buscar Instituto/Universidad:</label>

                            <input type="text" id="name" placeholder="Nombre del Instituto" />

                            <button type="submit">Buscar</button>
                        </form>
                    </div>

                    <div id="results"></div>

                    <div className="mb-1 m-5">
                        <h3>Noticias destacadas</h3>
                    </div>

                    <div id="carouselExampleAutoplaying" className="carousel slide carrusel" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../public/img/laCuencaDelPlata.jpg" className="d-block w-100" alt="La cuenca del plata" />
                            </div>
                            <div className="carousel-item">
                                <img src="../public/img/siglo21.png" className="d-block w-100" alt="Siglo 21" />
                            </div>
                            <div className="carousel-item">
                                <img src="../public/img/UNAF.jpg" className="d-block w-100" alt="UNAF" />
                            </div>
                        </div>
                        <button className="carousel-control-prev btn-next " type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next btn-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </section>
            </main>
        </>
    )
}
