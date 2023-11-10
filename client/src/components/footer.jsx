import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Footer = () => {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href="/trabaja" className="nav-link">Trabaja con nosotros</a>
                    </div>
                    <div className="col">
                        <a href="/preguntas" className="nav-link">Preguntas frecuentes</a>
                    </div>
                    <div className="col">
                        <a href="/acerca" className="nav-link">Acerca de nosotros</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


