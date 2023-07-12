import { Container } from "react-bootstrap";
import Curse from "../Component/Curse";
import Perfil from "../Component/Perfil";
import Studies from "../Component/Stud";
import Footerbt from "../component/Footerbt";

function About() {
    return ( <>
    <Perfil/>
    <Studies/>
    <Container className="my-3">
    <h3 className="text-center fw-bold my-4">Mis Cursos</h3>

    <Curse/>
    </Container>
    <Footerbt/>
    </> );
}

export default About;