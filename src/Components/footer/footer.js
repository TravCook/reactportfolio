import "./footer.css"
import {Navbar, Col, Container, Row} from 'react-bootstrap'


function footer(){
  return(
    <Navbar className="footer">
      <Container fluid>
        <Col>contact me</Col>
        <Col>
          <Row>
            <Col>
              <a href="https://www.github.com/TravCook" className="fa fa-github"></a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/travis-cook93/" className="fa fa-linkedin"></a>
            </Col>
            <Col>
              <a href="https://twitter.com/NoCoWebDevelop" className="fa fa-twitter"></a>
            </Col>
          </Row>
        </Col>
      </Container>
    </Navbar>
  )
}

export default footer