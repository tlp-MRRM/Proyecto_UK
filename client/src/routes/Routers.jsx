import { HomePage } from "../pages/Home.page.jsx";
import { AboutPage } from "../pages/About.page.jsx";
import { FaqPage } from "../pages/Faq.page.jsx";
import { SearchPage } from "../pages/Search.page.jsx";
import { LoginPage } from "../pages/Login.page.jsx";
import { SignupPage } from "../pages/signup.page.jsx";
import { RegisterInstitutePage } from "../pages/RegisterInsti.page.jsx";
import { RegisterAdminPage } from "../pages/RegisterAdmin.page.jsx";
import { RegisterCareerPage } from "../pages/registerCareer.page.jsx";
import { WorkWithUsPage } from "../pages/WorkWithUs.page.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFound.page.jsx";
import { UnauthorizedPage } from "../pages/Unauthorized.page.jsx";
import { InstitutePage } from "../pages/Institute.page.jsx";


export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/preguntas-frecuentes" element={<FaqPage />} />
                <Route path="/buscador" element={<SearchPage />} />
                <Route path="/registrate" element={<SignupPage />} />
                <Route path="/iniciar-sesion" element={<LoginPage />} />
                <Route path="/registro/admin" element={<RegisterAdminPage />} />
                <Route path="/registro/carrera" element={<RegisterCareerPage />} />
                <Route path="/registro/instituto" element={<RegisterInstitutePage />} />
                <Route path="/trabaja-con-nosotros" element={<WorkWithUsPage />} />
                <Route path="/unauthorized" element={<UnauthorizedPage />} />
                <Route path="/instituto/:id" element={<InstitutePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}


