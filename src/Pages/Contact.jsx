import { Container,Image } from "react-bootstrap";
import DateContact from "../component/Contacto";
import Footerbt from "../component/Footerbt";


function Contact() {
    return (  <>
       <Container>
       <div className="text-center">
       <h3 className="fw-bold">Me encantaría hablar contigo sobre una emocionante oportunidad de colaboración</h3>
         <p >Estoy convencido de que soy el candidato ideal para su equipo. Con mi sólido conjunto de habilidades y experiencia, confío en que puedo contribuir significativamente a sus proyectos y ayudarlo a lograr el éxito deseado. </p>
       <Image src="/assets/myAvatar.png" roundedCircle />

       </div>
   <DateContact/>


       </Container>
       <Footerbt/>
    </>);
}

export default Contact;