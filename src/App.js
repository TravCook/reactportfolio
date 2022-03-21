import './App.css';
import Navbar from "./Components/navbar/navbar.js"
import Aboutme from "./Components/aboutMe/aboutMe.js"
import SkillBreakdown from "./Components/skillBreakdown/skillBreakdown.js"
import Projects from "./Components/projects/projects.js"
import Footer from "./Components/footer/footer.js"
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
      <Container fluid className="wholeApp">
        <Navbar />
        {/* <Aboutme  /> */}
        {/* <SkillBreakdown  /> */}
        <Projects  />
        <Footer />
      </Container>
  );
}

export default App;
