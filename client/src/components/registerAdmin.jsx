import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Swal from "sweetalert2";

export const RegistroAdmin = () => {
    const [firstName, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsAdmin(event.target.checked);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();



        const role = isAdmin ? 'admin' : 'institute';


        const newUser = {
            firstName,
            lastName,
            email,
            password,
            role
        };

        try {
            const response = await fetch(`http://localhost:5000/api/register-admin`, {
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
                    confirmButtonText: '<a href="http://localhost:3000/admin-users" style="color: #FFFFFF; text-decoration: none;" >Ir a administrar usuarios</a>',
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
            console.log('error al crear usuario', error)
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
            <main className="container d-flex justify-content-center align-items-center" style={{ width: '350px' }}>
                <form id="formRegister" className="registerForm p-2 w-100" onSubmit={handleSubmit}>
                    <div className="register">
                        <h2>Registrar un usuario</h2>
                        <label htmlFor="name" className="form-label">
                            Nombre
                        </label>
                        <input
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            value={firstName}
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="form-control mb-3"
                        />

                        <label htmlFor="surname" className="form-label">
                            Apellido
                        </label>
                        <input
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            value={lastName}
                            type="text"
                            id="surname"
                            name="surname"
                            required
                            className="form-control mb-3"
                        />

                        <label htmlFor="email" className="form-label">
                            Correo electrónico
                        </label>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                        />

                        <label htmlFor="password" className="form-label">
                            Contraseña
                        </label>
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            value={password}
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="form-control mb-3"
                        />

                        <div className="form-check form-switch mb-3 d-flex flex-column align-items-end">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                isAdmin?
                            </label>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                checked={isAdmin}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                        <div className="d-flex justify-content-end mb-2">
                            <button type="submit" className="btn btn-primary">
                                Registrar
                            </button>
                        </div>

                    </div>
                </form>
            </main>
        </>
    );
};
