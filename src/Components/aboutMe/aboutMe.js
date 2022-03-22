import "./aboutMe.css"
import me from "../../public/me.jpg"
import {Container, Row, Col, Button} from 'react-bootstrap'


function aboutMe(){
  return (
    <Container className="bigContainer">
      {/* <Container className="smallerContainer"> */}
        <Row className="flexContainer">
        <Col className="text align-items-center">
        Self-motivated, self-sufficient, team player that is willing to deliver innovative and disruptive products that meet your commercial needs from a driven, detail oriented, thoughtful mindset. I am currently working at Georgia's Institute of Technology to help students gain a better understanding of full-stack web development.
        </Col>
        <Col lg={3} className="picCol"><img className="picture" src={me}></img></Col>
        </Row>
      {/* </Container> */}
    </Container>
  )
}

export default aboutMe