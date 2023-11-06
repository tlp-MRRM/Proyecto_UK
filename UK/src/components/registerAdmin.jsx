import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export const RegistroAdmin = () => {
    return (
        <>
            <main>
                <form id="formRegister" className="registerForm">
                    <div className="register">
                        <h2>Registrar un usuario</h2>
                        <label htmlFor="text" className="form-label">Nombre</label>
                        <input type="text" id="name" name="name" required className="form-control mb-3" />

                        <label htmlFor="text" className="form-label">Apellido</label>
                        <input type="text" id="surname" name="surname" required className="form-control mb-3" />

                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="text" id="email" name="email" className="form-control" aria-describedby="emailHelp" />

                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" id="password" name="password" required className="form-control mb-3" />
                        <div className="w-100 d-flex justify-content-end">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> isAdmin?</label>
                            <input className="form-check-input" type="checkbox" role="switch" name="isAdmin" id="flexSwitchCheckDefault" />
                        </div>
                        <button type="submit" className="btn">Registrar</button>
                    </div>
                </form>
            </main>
        </>
    )
}
