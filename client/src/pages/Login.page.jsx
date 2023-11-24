
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Login } from "../components/Login";

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