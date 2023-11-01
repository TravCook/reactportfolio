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

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  const pickedQuals = shuffle(qualities);
  console.log(qualities);

  return (
      <Container fluid className="App">
        <Navbar resume={"/Travis_Cook_Resume.pdf"} emailIcon={emailIcon} gitHubIcon={gitHubIcon} linkedInIcon={linkedInIcon} />
        <Container className="mainBody" fluid>
            {pickedQuals.slice(0,6).map((quality) => {
              return(
                <GenericQuality quality={quality} />
              )
            })}
        </Container>
      </Container>
  );
}

export default App;
