import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/trabaja-con-nosotros" className="nav-link">Trabaja con nosotros</Link>
                    </div>
                    <div className="col">
                        <Link to="/preguntas-frecuentes" className="nav-link">Preguntas frecuentes</Link>
                    </div>
                    <div className="col">
                        <Link to="/about" className="nav-link">Acerca de nosotros</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}


