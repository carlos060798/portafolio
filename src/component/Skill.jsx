import {
  faBootstrap,
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faNpm,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container,Row,Card } from "react-bootstrap";


function Skills() {
  return (
    <Container className="mt-5">
      <h3 className="text-center fw-9">My Skills</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <Card>
      <img src="/assets/html.svg" alt="html" style={{maxWidth: "150px", maxHeight: "150px"}} />
    </Card>
  </div>
  <div className="col">
    <Card>
      <img src="/assets/css.svg" alt="html" style={{maxWidth: "150px", maxHeight: "150px"}} />
    </Card>
  </div>
  <div className="col">
    <Card>
      <img src="/assets/js.svg" alt="html" style={{maxWidth: "150px", maxHeight: "150px"}} />
    </Card>
  </div>
  <div className="col">
    <Card>
      <img src="/assets/reacjs.svg" alt="html" style={{maxWidth: "150px", maxHeight: "150px"}} />
    </Card>
  </div>
  <div className="col">
    <Card>
      <img src="/assets/nodejs.svg" alt="html" style={{maxWidth: "150px", maxHeight: "150px"}} />
    </Card>
  </div>
  <div className="col">
    <Card>
      <img src="/assets/js.svg" alt="html" style={{maxWidth: "150px", maxHeight: "150px"}} />
    </Card>
  </div>
</div>
    </Container>
  );
}

export default Skills;
