import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { useAuthContext } from "../contexts/AuthContexts";
const {login}=useAuthContext();

export const AboutPage = () => {
    return (
        <>
            <Nav />
            <About />
            <Footer />
        </>
    )
}
