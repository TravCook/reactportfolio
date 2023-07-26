import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutMeShort from './Components/aboutMeShort/aboutMeShort';
import Github from './Components/github/github';
import FeaturedProjects from './Components/featuredProjects/featuredProjects';
import SkillsShort from './Components/skillsShort/skillsShort';
import {Container, Row, Col} from 'react-bootstrap'
import Footer from "./Components/footer/footer.js"

function App() {
  return (

    <Container fluid className="App">
      <Row><AboutMeShort /></Row>
      <Row>
        <Col lg='4'><Github /></Col>
        <Col><FeaturedProjects /></Col>
      </Row>
      <Row><SkillsShort /></Row>
      <Footer />
    </Container>

  );
}

export default App;
