import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import styles from '../../public/css/nav.module.css'
import { useAuthContext } from '../contexts/AuthContexts';
import { Link } from 'react-router-dom';

export const Nav = () => {

    const { isAuthenticated, logout } = useAuthContext();
    console.log(isAuthenticated());


    return (
        <>
            <header className='pb-2'>
                <nav>
                    <div className="mt-4 mb-4">
                        <Link to="/" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2" width="36" height="36" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M10 12h4v4h-4z" />
                            </svg>
                        </Link>
                    </div>

                    <div>
                        <Link to="/preguntas-frecuentes">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help-circle" width="36" height="36" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M12 16v.01" />
                                <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                            </svg>
                        </Link>
                    </div>

                    <div>
                        <Link to="/buscador">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="36" height="36" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </Link>
                    </div>
                    {
                        !isAuthenticated() ?
                            <div>
                                <Link to="/iniciar-sesion">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-login-2" width="36" height="36" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                                        <path d="M3 12h13l-3 -3" />
                                        <path d="M13 15l3 -3" />
                                    </svg>
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
