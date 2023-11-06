import { Acerca } from "../pages/acerca";
import { Inicio } from "../pages/inicio";
import { Preguntas } from "../pages/preguntas";
import { Buscador } from "../pages/buscador";
import { Registro } from "../pages/registro";
import { InicioSesion } from "../pages/iniciosesion";
import { RegistroAdminPage } from "../pages/registroAdmin";
import { RegistroCarrera } from "../pages/registroInstituto";
import { RegistroInstituto } from "../pages/registroCarrera";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/acerca" element={<Acerca/>} />
                    <Route path="/preguntas" element={<Preguntas/>} />
                    <Route path="/buscador" element={<Buscador/>} />
                    <Route path="/registro" element={<Registro/>} />
                    <Route path="/iniciar" element={<InicioSesion/>} />
                    <Route path="/registroAdmin" element={<RegistroAdminPage/>} />
                    <Route path="/registroCarrera" element={<RegistroCarrera/>} />
                    <Route path="/registroInstituto" element={<RegistroInstituto/>} />
            </Routes>
        </BrowserRouter>
    )
}

