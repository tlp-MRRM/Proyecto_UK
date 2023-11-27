
import { Nav } from "../pages/Nav";
import { Footer } from "../pages/Footer";
import { Signup } from "../pages/Signup";

export const SignupPage = () => {
    return (
        <div style={{ minHeight: "100vh", display: "grid", gridTemplateRows: "auto 1fr auto" }}>

            <Nav />
            <Signup />
            <Footer />
        </div>
    )
}

