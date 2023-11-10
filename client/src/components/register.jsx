import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Swal from "sweetalert2";

export const Register = () => {
    const [firstName, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordComfirm, setPasswordComfirm] = useState("");

    //onsubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            passwordComfirm,
        };

        try {
            const response = await fetch(`http://localhost:5000/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser),
            })
            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    title: 'Hecho',
                    text: data.message,
                    icon: 'success',
                    confirmButtonText: '<a href="http://localhost:3000/" style="color: #FFFFFF; text-decoration: none;" >Ok</a>',
                })
            } else {
                Swal.fire({
                    title: 'Error',
                    text: data.message,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                })
            }
        } catch (error) {
            console.log('Error al registrarse', error)
            Swal.fire({
                title: 'Error Catch',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ok',
            })
        }
    };

    return (
        <>
            <main className="container d-flex justify-content-center align-items-center">
                <form id="formRegister" className="registerForm" onSubmit={handleSubmit}>
                    <h2 className="mb-2">Regístrate</h2>
                    <div className="register">
                        <label htmlFor="name" className="form-label">
                            Nombre
                        </label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            id="name"
                            name="name"
                            required
                            className="form-control mb-3"
                        />
                        <label htmlFor="text" className="form-label">
                            Apellido
                        </label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                            id="lastName"
                            name="lastName"
                            required
                            className="form-control mb-3"
                        />
                        <label htmlFor="email" className="form-label">
                            Correo electrónico
                        </label>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="text"
                            id="email"
                            name="email"
                            className="form-control mb-3"
                            aria-describedby="emailHelp"
                        />
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Contraseña
                        </label>
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="form-control mb-3"
                        />
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Confirme su contraseña
                        </label>
                        <input
                            value={passwordComfirm}
                            onChange={(e) => {
                                setPasswordComfirm(e.target.value);
                            }}
                            type="password"
                            id="passwordComfirm"
                            name="passwordComfirm"
                            required
                            className="form-control mb-3"
                        />
                        <button type="submit" className="btn btn-success w-100 mb-3">
                            Registrar
                        </button>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="m-1">¿Ya tenés una cuenta?</p>
                            <a href="/iniciar" className="btn btn-outline-primary w-50">
                                Inicia sesión
                            </a>
                        </div>
                    </div>
                </form>
            </main>
            <script src="./js/register.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                crossOrigin="anonymous"
            ></script>
        </>
    );
};
