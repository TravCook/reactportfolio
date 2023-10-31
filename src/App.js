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
            {qualities.map((quality) => {
              return(
                <GenericQuality quality={quality} />
              )
            })}
        </Container>
      </Container>
  );
}

export default App;
