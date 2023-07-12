import { Container } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Curse from "./Curse";

function Studies() {
    return (<>
  <Container className="text-center">
  <h2 className="mb-4">Mis Estudios</h2>
  <ListGroup as="ol" numbered>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Analisis y desarrollo de sistemas de informacion</div>
        Sena
      </div>
      <Badge bg="primary" pill>
        2020 - 2023
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Bootcamp Desarrollador Full Stack</div>
        Protalento
      </div>
      <Badge bg="primary" pill>
        2023
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Derecho</div>
        Universidad Francisco de Paula Santander
      </div>
      <Badge bg="primary" pill>
        2016 - 2021
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Mision tic</div>
        Universidad Industrial de Santander
      </div>
      <Badge bg="primary" pill>
        2021
      </Badge>
    </ListGroup.Item>
  </ListGroup>
</Container>
    
    </>  );
}

export default Studies;