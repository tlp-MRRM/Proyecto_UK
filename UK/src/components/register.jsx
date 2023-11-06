import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Register = () => {
    return (
        <>
            <main className="d-flex justify-content-center align-items-center">
                <form id="formRegister" className="registerForm">
                    <div className="register">
                        <h2 className="mb-2">Regístrate</h2>
                        <label htmlFor="text" className="form-label">Nombre</label>
                        <input type="text" id="name" name="name" required className="form-control mb-3" />
                        <label htmlFor="text" className="form-label">Apellido</label>
                        <input type="text" id="surname" name="surname" required className="form-control mb-3" />
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="text" id="email" name="email" className="form-control mb-3" aria-describedby="emailHelp" />
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" id="password" name="password" required className="form-control mb-3" />
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirme su contraseña</label>
                        <input type="password" id="passwordComfirm" name="passwordComfirm" required className="form-control mb-3" />
                        <button type="submit" className="btn btn-success w-100 mb-3">Registrar</button>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="m-1">¿Ya tenés una cuenta?</p>
                            <a href="/iniciar-sesion" className="btn btn-outline-primary w-50">Inicia sesión</a>
                        </div>
                    </div>
                </form>
            </main>
            <script src="./js/register.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                crossOrigin="anonymous"></script>
        </>
    )
}
