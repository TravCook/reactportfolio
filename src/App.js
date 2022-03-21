import './App.css';
import { useEffect, useState } from 'react';
import Navbar from "./Components/navbar/navbar.js"
import Aboutme from "./Components/aboutMe/aboutMe.js"
import SkillBreakdown from "./Components/skillBreakdown/skillBreakdown.js"
import Projects from "./Components/projects/projects.js"
import Footer from "./Components/footer/footer.js"
import {Container, Row, Col} from 'react-bootstrap'

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
    }
  }

  return (
      <Container fluid className="wholeApp">
        <Navbar onClick={pageClick}/>
        {navFunction()}
        <Footer />
      </Container>
  );
}

export default App;
