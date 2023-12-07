import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContexts";
import styles from "../../public/css/login.module.css";
export const Login = () => {
  const { loginFunction } = useAuthContext();
  let navigate = useNavigate();
  const [redirectTo, setRedirectTo] = useState('/');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (redirectTo) {

      return navigate(redirectTo);

    }
  }, [redirectTo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await loginFunction(email, password);
    console.log("DATA DE LOGIN ABAJO");
    console.log(data);

    if (data.redirectTo) {
      setRedirectTo(data.redirectTo);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className={`${styles.login} p-4`}>
          <h1 className="iniciarS">Iniciar sesión</h1>

          <form
            id="login-form"
            onSubmit={handleSubmit}
            style={{ width: "400px" }}
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
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
                  setPassword(e.target.value);
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
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                Iniciar sesión
              </button>
            </div>
            <div
              className="d-flex justify-content-center p-2"
              style={{ color: "#CBCBCB" }}
            >
              _________________________________________________________
            </div>

            <div className="d-flex justify-content-center">
              <a
                href="/registrate"
                className="btn mt-3 btn-outline-success w-100"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                Crear cuenta nueva
              </a>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
