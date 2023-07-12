import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Projectos from "../component/Project";
import Footerbt from "../component/Footerbt";



function Projects() {

 
    return ( <>
     <div className="bg-primary">
        <Container className="text-center text-white p-5">
          <h3 className="fw-bold">Mis proyectos prácticos</h3>
          <p> soy un programador junior apasionado por la tecnología y el desarrollo de aplicaciones web. Aunque no cuento con experiencia profesional, he invertido mucho tiempo y esfuerzo en aprender y dominar el stack del MERN: MongoDB, Express.js, React y Node.js. Estoy aquí para demostrar cómo estos conocimientos pueden aplicarse en proyectos reales          </p>
        </Container>
      </div>
    
 
    <Container>

    <Projectos/>
  
    <div className="text-center my-5">
      <h3 className="text-primary  fw-bold">Interesado en trabajar??</h3>
     <p>Siempre estoy abierto a discutir el trabajo de creación de productos o las oportunidades de asociación.</p>
     <Link
                  to="/contact"
                  className="btn btn-outline-primary rounded-3 h5 text-lg text-md text-center mx-2"
                  as={Button}
                >
                  Contacto
                </Link>
     </div>
    </Container>
    <Footerbt/>
    
    </> );
}

export default Projects;