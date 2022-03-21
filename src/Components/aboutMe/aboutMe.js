import "./aboutMe.css"
import me from "../../public/me.jpg"
import {Container, Row, Col} from 'react-bootstrap'


function aboutMe(){
  return (
    <Container className="bigContainer">
      <Container className="smallerContainer">
        <Row>
        <Col className="text">
          I am a full-stack web developer who is currently an instruction specialist at the full-stack bootcamp by Trilogy/2U education through the Georgia Institute of Technology. Thanks to this experience I am well versed in many front-end and back-end languages. When I am not working with students, I am working on some of my side coding projects, and watching sports like baseball, hockey, or the premier league.
        </Col>
        <Col className="picCol"><img className="picture" src={me}></img></Col>
        </Row>
      </Container>
    </Container>
  )
}

export default aboutMe