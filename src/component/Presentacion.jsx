import { Button, Col, Container, Row,Image } from 'react-bootstrap';
import pdfFile from '../doc/CV.pdf'

function Presentacion() {
   const descargarPDF = () => {
      const link = document.createElement('a');
      link.href = pdfFile;
      link.download = 'archivo.pdf';
      link.click();
    };
  return (
   <Container className='mt-5'>
    <Row>
     <Col className='col-12 col-lg-8 text-center'> 
     <h3 className='fw-bold'>Desarollador web Junior</h3>
     <p>Planifico y codifico soluciones de sofware me encanta lo que hago</p>
     
     <div className='d-flex justify-content-center'>
        <Button variant="outline-primary rounded-3 h5 text-lg text-md text-center ">Contacto</Button>
        <Button variant="outline-primary rounded-3 h5 text-lg text-md text-center" style={{ marginLeft: '10px' }} onClick={descargarPDF}>Download CV</Button>
     </div>
     </Col>
     <Col className='col-12 col-lg-4'>
        <div className='d-flex justify-content-center'>
          <Image src="/assets/myAvatar.png" roundedCircle />
          </div>
             </Col>
    </Row>

   </Container>
  );
}

export default Presentacion;