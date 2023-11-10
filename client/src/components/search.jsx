import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Search = () => {
    return (
        <>
            <main className="container py-5">
                <section className="row justify-content-center text-light">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <form id="search-input" className="mb-5">
                            <h2 className="mb-4 text-center text-black">Buscar Instituto/Universidad</h2>
                            <div className="input-group">
                                <input type="text" id="name" className="form-control" placeholder="Nombre del Instituto" />
                                <button type="submit" className="btn btn-primary">Buscar</button>
                            </div>
                        </form>

                        <div id="results"></div>


                    </div>
                </section>
            </main>
        </>
    );
}
