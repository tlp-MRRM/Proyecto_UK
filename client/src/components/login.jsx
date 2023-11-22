import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContexts";
import styles from '../../public/css/login.module.css'

import Swal from "sweetalert2";

export const Login = () => {
    const navigate = useNavigate();

    const { login } = useAuthContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        };

        const result = login(email, password)

        /* const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })


        if (!response.ok) {
            const { message } = await response.json();
            return Swal.fire('Error', message, 'error');
        }

        const { message, token, id, role } = await response.json()


        localStorage.setItem('token', token); */

        Swal.fire('Inicio de sesion exitoso', result.message, 'success');
        if (result.role == 'admin') {
            setTimeout(() => {
                navigate('/admin-users');
            }, 2000);
        } else if (result.role == 'institute') {
            setTimeout(async () => {
                const responseInstitutes = await fetch('http://localhost:5000/api/get-institutes-by-user', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id_user: id })
                })
                if (responseInstitutes.ok) {
                    return navigate(`http://localhost:5000/instituto/${id}`);
                }
                navigate(`http://localhost:5000/nueva-institucion`);

            }, 2000);
        }
        else {
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }

    return (
        <>
            <main className={styles.main}>
                <div className={`${styles.login} p-4`}>
                    <h1 className="iniciarS">Iniciar sesión</h1>

                    <form id="login-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Correo electrónico
                            </label>
                            <input
                                value={email}
                                type="email"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                name="email"
                                required
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                            />
                            <div id="email" name="email" className="form-text">
                                Nunca compartiremos tu información con nadie.
                            </div>
                        </div>

                        <div className="mb-1">
                            <label htmlFor="password" className="form-label">
                                Contraseña
                            </label>
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                value={password}
                                type="password"
                                name="password"
                                required
                                className="form-control"
                                id="password"
                            />
                            <p id="validationErr"></p>
                        </div>
                        <div className="pb-3">
                            Olvidó su contraseña? Haga click{" "}
                            <a href="restorePSW.html" className="aqui">
                                aquí
                            </a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary w-100" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                Iniciar sesión
                            </button>
                        </div>
                        <div className="d-flex justify-content-center p-2" style={{ color: "#CBCBCB" }}>
                            _________________________________________________________
                        </div>

                        <div className="d-flex justify-content-center">
                            <a href="/registrate" className="btn mt-3 btn-outline-success w-100" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                Crear cuenta nueva
                            </a>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
