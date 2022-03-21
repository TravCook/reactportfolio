import "./navbar.css"
import {Navbar, Col, Container, Button} from 'react-bootstrap'

function navBar(props){
  return (
    <Navbar className="nav">
      <Container fluid>
        <Col lg={1} className="navItem">
          <Button className="navButton" onClick={props.onClick}>About Me</Button>
        </Col>
        <Col lg={1} className="navItem">
          <Button className="navButton" onClick={props.onClick}>My Skills</Button>
        </Col>
        <Col lg={1} className="navItem">
          <Button className="navButton" onClick={props.onClick}>My Work</Button>
        </Col>
        <Col className="navbarName">
          <div>TRAVIS M. COOK</div> 
        </Col>
      </Container>
    </Navbar>
  )
}

export default navBar