
import { Nav } from "../pages/Nav";
import { Footer } from "../pages/Footer";
import { Login } from "../pages/Login";

export const LoginPage = () => {
    return (
        <div style={{ minHeight: "100vh", display: "grid", gridTemplateRows: "auto 1fr auto" }}>
            <Nav />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Login />
            </div>
            <Footer />
        </div>
    )
}