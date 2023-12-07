import { RegistroAdmin } from "../pages/RegisterAdmin";
import { Nav } from "../pages/Nav";
import { Footer } from "../pages/Footer";

export const RegisterAdminPage = () => {
    return (
        <div style={{ minHeight: "100vh", display: "grid", gridTemplateRows: "auto 1fr auto" }}>
            <Nav />
            <RegistroAdmin />
            <Footer />
        </div>
    )
}
