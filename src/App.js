import './App.css';
import Navbar from "./Components/navbar/navbar.js"
import Aboutme from "./Components/aboutMe/aboutMe.js"
import SkillBreakdown from "./Components/skillBreakdown/skillBreakdown.js"
import Projects from "./Components/projects/projects.js"
import Footer from "./Components/footer/footer.js"

function App() {
  return (
    <div className="App lg:h-screen">
      <Navbar />
      <Aboutme />
      <SkillBreakdown />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
