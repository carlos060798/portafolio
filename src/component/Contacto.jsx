import { Container, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function DateContact() {
  return (
    <>
      <Container className="my-4">
        <h1 className="text-center fw-bold">
        Gracias por tomarse el tiempo para comunicarse. ¿Cómo puedo ayudarte hoy?
        </h1>
        <Col className="col-12  d-flex align-items-center justify-content-center">
        <Card className="col-12 col-md-6 text-center">
      <Card.Body>
        <Card.Title className="">Datos de Contacto</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Email:</strong> daniloangatitagarcia@gmail.com
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Telefono:</strong> 3208847470
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/carlos-danilo-angarita-garcía-bbabb21b7" target="_blank" rel="noopener noreferrer">
              Carlos Danilo Angarita Garcia

            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
       </Col>
      </Container>
    </>
  );
}

export default DateContact;
