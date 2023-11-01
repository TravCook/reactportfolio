import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import Navbar from './Components/navbar/navbar.js'
import GenericQuality from './Components/genericQuality/genericQuality';
import emailIcon from './public/envelope-icon.png'
import gitHubIcon from './public/github-icon.png'
import linkedInIcon from './public/linkedin-square-icon.png'
import qualities from './qualities.json'

function App() {
  return (
      <Container fluid className="App">
        <Navbar resume={"/Travis_Cook_Resume.pdf"} emailIcon={emailIcon} gitHubIcon={gitHubIcon} linkedInIcon={linkedInIcon} />
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
