import { useState } from "react";
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        };

        fetch("http://localhost:5000/api/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.status === 200) {
                    window.location.href = "/";
                } else {
                    alert(data.message);
                }
            })
            .catch((err) => console.log(err));
    };


    return (
        <>
            <main className="container">
                <div className="login">
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
                        <button type="submit" className="btn btn-primary">
                            Iniciar sesión
                        </button>

                        <div className="d-flex justify-content-center p-2 lineaSeparadora">
                            _________________________________________________________
                        </div>

                        <div className="d-flex justify-content-center">
                            <a href="/registro" className="btn mt-3 btn-outline-success">
                                Crear cuenta nueva
                            </a>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}