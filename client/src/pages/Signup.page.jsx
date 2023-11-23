
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Signup } from "../components/Signup";

export const SignupPage = () => {
    return (
        <div style={{ minHeight: "100vh", display: "grid", gridTemplateRows: "auto 1fr auto" }}>

            <Nav />
            <Signup />
            <Footer />
        </div>
    )
}

