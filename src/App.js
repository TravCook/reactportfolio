import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import Navbar from './Components/navbar/navbar.js'
import GenericQuality from './Components/genericQuality/genericQuality';
import qualities from './qualities.json'

function App() {
  return (
      <Container fluid className="App">
        <Navbar resume={"/Travis_Cook_Resume.pdf"} />
        <Container className="mainBody" fluid>
          <Row>
            {qualities.map((quality) => {
              return(
                <Col lg="4" xs="12">
                  <GenericQuality quality={quality} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </Container>
  );
}

export default App;
