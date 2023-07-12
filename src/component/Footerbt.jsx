import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footerbt() {
  return (
    <>
      <section className="bg-primary text-light py-5">
        <Container>
          <Row className="text-light py-5">
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
          </Row>
        </Container>
      </section>

      <Container className="text-center">
        <Row className="py-5">
          <h3 className="text-light h1">
            <i className="bi bi-c-circle-fill"></i>
          </h3>
          <h4 className="fw-bold my-5  text-primary">
            Viviendo, aprendiendo y subiendo de nivel un día a la vez.
          </h4>
          <Row>
            <Col>
              <Link
                to="/www.linkedin.com/in/carlos-danilo-angarita-garcía-bbabb21b7"
                className="btn btn-outline-primary rounded-circle h5 text-lg text-md text-center mx-2"
                as={Button}
              >
                <i className="bi bi-linkedin"></i>{" "}
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline-primary rounded-circle h5 text-lg text-md text-center mx-2"
                as={Button}
              >
                <i className="bi bi-envelope-at-fill"></i>{" "}
              </Link>

              <Link
                to="/https://github.com/carlos060798"
                className="btn btn-outline-primary rounded-circle h5 text-lg text-md text-center mx-2"
                as={Button}
              >
                <i className="bi bi-github"></i>
              </Link>
            </Col>
          </Row>
        </Row>
        <h5 className=" fw-bold py-4  text-primary">
          {" "}
          <i className="bi bi-c-circle"> </i> Carlos Danilo Angarita Garcia{" "}
        </h5>
      </Container>
    </>
  );
}

export default Footerbt;
