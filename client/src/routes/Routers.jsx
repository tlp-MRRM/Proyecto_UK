import { Acerca } from "../pages/acerca";
import { Inicio } from "../pages/inicio";
import { Preguntas } from "../pages/preguntas";
import { Buscador } from "../pages/buscador";
import { Registro } from "../pages/registro";
import { InicioSesion } from "../pages/iniciosesion";
import { RegistroAdminPage } from "../pages/registroAdmin";
import { RegistroCarrera } from "../pages/registroCarrera";
import { RegistroInstituto } from "../pages/registroInsti";
import { Trabaja } from "../pages/trabaja";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/acerca" element={<Acerca />} />
                <Route path="/preguntas" element={<Preguntas />} />
                <Route path="/buscador" element={<Buscador />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/iniciar" element={<InicioSesion />} />
                <Route path="/registro/admin" element={<RegistroAdminPage />} />
                <Route path="/registro/carrera" element={<RegistroCarrera />} />
                <Route path="/registro/instituto" element={<RegistroInstituto />} />
                <Route path="/trabaja" element={<Trabaja />} />
            </Routes>
        </BrowserRouter>
    )
}

