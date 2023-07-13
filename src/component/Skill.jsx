import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <Container className='my-5'>
      <CardGroup className=''>
        <Card className='text-center text-primary ' >
          <Card.Body>
            <img src="/assets/codigo.svg" alt="myAvatar" className='rounded-circle' style={{ width: '80px', height: '80px', margin: 'auto' }} />
            <Card.Title className='fw-bold'>Lenguajes y Herramientas</Card.Title>
            <Card.Text>
              <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Visual Studio Code</li>
                <li>Postman</li>
              </ol>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center text-primary '  style={{ marginLeft: '20px' }}>
          <Card.Body>
            <img src="/assets/Tols.svg" alt="tools" style={{ width: '80px', height: '80px', margin: 'auto' }} />
            <Card.Title className='fw-bold'>Framework &amp; Librerias</Card.Title>
            <Card.Text>
              <ol>
                <li>React</li>
                <li>Bootstrap</li>
                <li>React-Bootstrap</li>
                <li>React-Router-Dom</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
                <li>Mongoose</li>
              </ol>
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card className='text-center text-primary '  style={{ marginLeft: '20px' }}>
          <Card.Body>
            <img src="/assets/DataBASE.svg" alt="database" style={{ width: '80px', height: '80px', margin: 'auto' }} />
            <Card.Title className='fw-bold'>Bases de datos</Card.Title>
            <Card.Text>
              <ol>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ol>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default GroupExample;