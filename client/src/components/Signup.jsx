import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../../public/css/signup.module.css";

export const Signup = () => {
    const navigate = useNavigate();
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
            //validacion para password con 8 caracteres minimo
            if (password.length < 8) {
                return Swal.fire({
                    title: "Error",
                    text: "La contraseña debe tener al menos 8 caracteres",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            }

            //validacion para password y passwordComfirm iguales
            if (password !== passwordComfirm) {
                return Swal.fire({
                    title: "Error",
                    text: "Las contraseñas no coinciden",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            }

            //validacion para email
            if (!email.includes("@")) {
                return Swal.fire({
                    title: "Error",
                    text: "El email no es válido",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            }

            // validacion para email
            if (!email.includes(".com")) {
                return Swal.fire({
                    title: "Error",
                    text: "El email no es válido",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            }

            const response = await fetch(`http://localhost:5000/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire(
                    {
                        title: "Bien Hecho!",
                        text: data.message,
                        icon: "success",
                        confirmButtonText: "Ok",
                    },
                    setTimeout(() => {
                        navigate("/");
                    }, 2000)
                );
            } else {
                Swal.fire({
                    title: "Error",
                    text: data.message,
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            }
        } catch (error) {
            console.log("Error al registrarse", error);
            Swal.fire({
                title: "Error Catch",
                text: error,
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    return (
        <>
<<<<<<< HEAD
            <main>
                <form
                    id="formRegister"
                    className={`${styles.form} p-4`}
                    style={{ width: "430px" }}
                    onSubmit={handleSubmit}
                >
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
                            className="form-control mb-4"
                        />
                        <div>
                            <button
                                type="submit"
                                className="btn btn-success w-100 mb-3"
                                style={{ fontWeight: "bold", fontSize: "20px" }}
                            >
                                Registrar
                            </button>
=======
            <div className="w-100 d-flex justify-content-center">
                <main className="d-flex justify-content-center align-items-center p-4" style={{ width: 'fit-content' }}>
                    <form id="formRegister" className="registerForm" style={{ width: '400px' }} onSubmit={handleSubmit}>
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
                                className="form-control mb-4"
                            />
                            <div className="d-flex">
                                <a href="/iniciar-sesion" className="btn btn-outline-primary w-100 me-1" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                    Iniciar sesión
                                </a>
                                <button type="submit" className="btn btn-success w-100 ms-1" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                    Registrarse
                                </button>
                            </div>

>>>>>>> 2c02abe37f8bd0e7f07b25c5f6a6d37e7cc8bc11
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center w-100">
                            <p className="m-1">¿Ya tenés una cuenta?</p>
                            <a
                                href="/iniciar-sesion"
                                className="btn btn-outline-primary w-100"
                                style={{ fontWeight: "bold", fontSize: "20px" }}
                            >
                                Inicia sesión
                            </a>
                        </div>
                    </div>
                </form>
            </main>

        </>
    );
};
