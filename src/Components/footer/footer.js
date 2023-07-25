import "./footer.css"
import {Navbar, Col, Container, Row, Button} from 'react-bootstrap'


function footer(){
  return(
    <Navbar className="footer">
      <Container fluid>
        {/* <Col className="contactMe">contact me</Col> */}
        <Col>
          <Row>
            <Col>
              <Button target="_blank" rel="noreferrer" href="https://www.github.com/TravCook" className="footerButton">Github</Button>
            </Col>
            <Col>
              <Button target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/travis-cook93/" className="footerButton">LinkedIn</Button>
            </Col>
            <Col>
              <Button target="_blank" rel="noreferrer" mailto="traviscookdev@gmail.com" className="footerButton">Email</Button>
            </Col>
          </Row>
        </Col>
      </Container>
    </Navbar>
  )
}

export default footer