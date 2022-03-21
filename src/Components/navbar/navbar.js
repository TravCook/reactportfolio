import "./navbar.css"
import {Navbar, Col, Container} from 'react-bootstrap'

function navBar(){
  return (
    <Navbar className="nav">
      <Container fluid>
        <Col lg={1} className="navItem">About Me</Col>
        <Col lg={1} className="navItem">My Skills</Col>
        <Col lg={1} className="navItem">My Work</Col>
        <Col className="navbarName">
          <div>TRAVIS M. COOK</div> 
        </Col>
      </Container>
    </Navbar>
  )
}

export default navBar