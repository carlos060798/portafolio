import { Row,Container,Button} from "react-bootstrap";
import { Link } from "react-router-dom";


function Mensage() {
    return ( <>
       <section className="bg-primary text-light py-5">
       
          <Row className="text-light py-5">
          <Container>
            <div className="d-md-flex flex-md-column justify-content-between align-items-center">
              <h3>¿Quieres iniciar un proyecto?</h3>
              <h5>¿Interesado en trabajar juntos? Disponible para comenzar.</h5>
              <Link
                to="/contact"
                className="btn btn-outline-light rounded-3 h5 text-lg text-md text-center mx-2 mt-md-3"
                as={Button}
              >
                Contacto
              </Link>
            </div>
            </Container>
          </Row>
       
      </section>
    </> );
}

export default Mensage;