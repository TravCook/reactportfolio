import './App.css';
import { useState } from 'react';
import Navbar from "./Components/navbar/navbar.js"
import Aboutme from "./Components/aboutMe/aboutMe.js"
import SkillBreakdown from "./Components/skillBreakdown/skillBreakdown.js"
import Projects from "./Components/projects/projects.js"
import Footer from "./Components/footer/footer.js"
import {Container} from 'react-bootstrap'

function App() {
  const [page, setPage] = useState("About Me")

  const pageClick = (event) => {
    setPage(event.target.textContent)
  }

  const navFunction = () => {
    switch(page){
      case 'About Me':
        return(
          <Aboutme />
        )
      case 'My Work':
        return(
          <Projects />
        )
      case 'My Skills':
        return(
          <SkillBreakdown />
        )
    }
  }

  return (
    <>
      <Container fluid className="wholeApp desktop">
        <Navbar onClick={pageClick}/>
        {navFunction()}
        <Footer />
      </Container>
      <Container fluid className="wholeApp mobile">
        <Navbar onClick={pageClick}/>
        <Aboutme />
        <Projects />
        <SkillBreakdown />
        <Footer />
      </Container>
    </>
  );
}

export default App;
