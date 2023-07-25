import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutMeShort from './components/aboutMeShort/aboutMeShort';
import Github from './components/github/github';
import FeaturedProjects from './components/featuredProjects/featuredProjects';
import SkillsShort from './components/skillsShort/skillsShort';
import {Container, Row, Col} from 'react-bootstrap'
import Footer from "./components/footer/footer.js"

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
