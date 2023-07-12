import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { faGithub, faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DataProjects from "../doc/dataproject";

function Projectos() {
  return (
    <Row xs={1} md={2} className="g-4 mt-5">
      {DataProjects.map((project) => (
        <Col key={project.id}>
          <Card>
            <Card.Img variant="top" src="/assets/apiRick.jpg" />
            <Card.Body>
              <Card.Title>{project.ProjectName}</Card.Title>
              <Card.Text>
              <p>Proyecto de consumo de Rick and Morty Character Api construido con React js, Bostrapt y Sas</p>

              </Card.Text>
              <div className="d-flex justify-content-center">
            <Link to={project.UrlGit} as={Button}>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>

            <Link to={project.UrlWeb} as={Button} className='ml-3'>
              <FontAwesomeIcon icon={faFirefoxBrowser} size="2x" />
            </Link>
          </div>
            </Card.Body>

          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Projectos;




/*import React from 'react';
import { faGithub, faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Project({ project }) {
  const { ProjectName, UrlGit, UrlWeb } = project;

  return (
   
      <Card>
        <Card.Img variant="top" src="/assets/apiRick.jpg" />
        <Card.Body className="text-center">
          <Card.Title>{ProjectName}</Card.Title>
          <Card.Text>
            <p>Proyecto de consumo de Rick and Morty Character Api construido con React js, Bostrapt y Sas</p>
          </Card.Text>
          <div className="d-flex justify-content-around">
            <Link to={UrlGit} as={Button}>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>

            <Link to={UrlWeb} as={Button}>
              <FontAwesomeIcon icon={faFirefoxBrowser} size="2x" />
            </Link>
          </div>
        </Card.Body>
      </Card>
    
  );
}





export default Project; 

*/