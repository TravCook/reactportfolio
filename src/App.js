import './App.css';
import Navbar from "./Components/navbar/navbar.js"
import Aboutme from "./Components/aboutMe/aboutMe.js"
import SkillBreakdown from "./Components/skillBreakdown/skillBreakdown.js"
import Projects from "./Components/projects/projects.js"
import Footer from "./Components/footer/footer.js"

function App() {
  return (
    <div className="App">
      <div className="mobile grid grid-rows-auto">
        <Navbar />
        <Aboutme />
        <SkillBreakdown />
        <Projects />
        <Footer />
      </div>
      <div className="desktop">
        <Navbar />
        <Aboutme />
        <SkillBreakdown />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
