import "./footer.css"
import {Navbar, Col, Container, Row} from 'react-bootstrap'


function footer(){
  return(
    <Navbar className="footer">
      <Container fluid>
        <Col className="contactMe">contact me</Col>
        <Col>
          <Row>
            <Col>
              <a target="_blank" rel="noreferrer" href="https://www.github.com/TravCook" className="fa fa-github footerIcon"></a>
            </Col>
            <Col>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/travis-cook93/" className="fa fa-linkedin footerIcon"></a>
            </Col>
            <Col>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/NoCoWebDevelop" className="fa fa-twitter footerIcon"></a>
            </Col>
          </Row>
        </Col>
      </Container>
    </Navbar>
  )
}

export default footer