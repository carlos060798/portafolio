import { Carousel, Container, Image } from "react-bootstrap";

function Curse() {
  return (

    <Container className="d-flex justify-content-center">
    <Carousel data-bs-theme="dark"  className="d-flex">
      <Carousel.Item className="">
        <Image
          className="img-fluid img-thumbnail"
          src="/assets/Html.jpg"
          alt="First slide"
          style={{ maxWidth: '800px', maxHeight: '800px' }}
        />
      </Carousel.Item>
      <Carousel.Item > 
        <Image
          className="img-fluid img-thumbnail"
          src="/assets/Bostrap.jpg"
          alt="First slide"
          style={{ maxWidth: '800px', maxHeight: '800px' }}
        />
      </Carousel.Item>
      <Carousel.Item >
        <Image
          className="img-fluid img-thumbnail"
          src="/assets/Logica1.jpg"
          alt="First slide"
          style={{ maxWidth: '800px', maxHeight: '800px' }}
        />
      </Carousel.Item>
      <Carousel.Item >
        <Image
          className="img-fluid img-thumbnail"
          src="/assets/front1.jpg"
          alt="First slide"
          style={{ maxWidth: '800px', maxHeight: '800px' }}
        />
      </Carousel.Item>
      <Carousel.Item className="">
        <Image
          className="img-fluid img-thumbnail"
          src="/assets/javascript.jpg"
          alt="First slide"
          style={{ maxWidth: '800px', maxHeight: '800px' }}
        />
      </Carousel.Item>
      <Carousel.Item className="">
        <Image
          className="img-fluid "
          src="/assets/Reac.jpg"
          alt="First slide"
          style={{ maxWidth: '800px', maxHeight: '800px' }}
        />
      </Carousel.Item>
      
    </Carousel>
    </Container>
    
  );
}

export default Curse;
