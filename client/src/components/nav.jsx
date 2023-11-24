import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import styles from '../../public/css/nav.module.css'
import { useAuthContext } from '../contexts/AuthContexts';
import { Link } from 'react-router-dom';

export const Nav = () => {

    const { isLoggedIn, logout } = useAuthContext();
    console.log(isLoggedIn);


    return (
        <>
            <header className='pb-2'>
                <nav>
                    <div className="mt-4 mb-4">
                        <Link to="/" className="material-symbols-outlined">
                            home
                        </Link>
                    </div>

                    <div>
                        <Link to="/preguntas-frecuentes" className="material-symbols-outlined">
                            quiz
                        </Link>
                    </div>

                    <div>
                        <Link to="/buscador" className="material-symbols-outlined">
                            travel_explore
                        </Link>
                    </div>
                    {
                        !isLoggedIn ?
                            <div>
                                <Link to="/iniciar-sesion" className="material-symbols-outlined">
                                    login
                                </Link>
                            </div> :
                            <div className={`${styles.perfil} nav-item dropdown`}>
                                <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="36" height="36" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                    </svg>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/perfil">Perfil</Link></li>
                                    <li><button className='btn' onClick={logout}>Cerrar sesion</button></li>
                                </ul>
                            </div>
                    }

                </nav>
            </header>
        </>
    )
}
