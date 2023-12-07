import { HomePage } from "../components/Home.page.jsx";
import { AboutPage } from "../components/About.page.jsx";
import { FaqPage } from "../components/Faq.page.jsx";
import { SearchPage } from "../components/Search.page.jsx";
import { LoginPage } from "../components/Login.page.jsx";
import { SignupPage } from "../components/signup.page.jsx";
import { RegisterInstitutePage } from "../components/RegisterInsti.page.jsx";
import { RegisterAdminPage } from "../components/RegisterAdmin.page.jsx";
import { RegisterCareerPage } from "../components/registerCareer.page.jsx";
import { WorkWithUsPage } from "../components/WorkWithUs.page.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../components/NotFound.page.jsx";
import { UnauthorizedPage } from "../components/Unauthorized.page.jsx";
import { InstitutePage } from "../components/Institute.page.jsx";
import { EditInstitutePage } from "../components/Institutes/editInstitute.page.jsx";
import { PrivateRoutes } from "./PrivateRoutes.jsx";

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
        <Route path="/trabaja-con-nosotros" element={<WorkWithUsPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/instituto/:id" element={<InstitutePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/mi-instituto" element={<EditInstitutePage />} />
          <Route path="/registro/admin" element={<RegisterAdminPage />} />
          <Route path="/registro/carrera" element={<RegisterCareerPage />} />
          <Route path="/registro/instituto" element={<RegisterInstitutePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
