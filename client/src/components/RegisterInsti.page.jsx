import { RegisterInstitute } from "../pages/registerInstitute";
import { Footer } from "../pages/Footer";
import { Nav } from "../pages/Nav";

export const RegisterInstitutePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Nav />
      <RegisterInstitute />
      <Footer />
    </div>
  );
};
