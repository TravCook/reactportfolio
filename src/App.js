import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import Navbar from './Components/navbar/navbar.js'
import Builder from './Components/builder/builder.js'
import Leader from './Components/leader/leader.js'
import Optimizer from './Components/optimizer/optimizer.js'
import ProblemSolver from './Components/problemSolver/problemSolver.js'
import Student from './Components/student/student.js'
import Teammate from './Components/teammate/teammate.js'

function App() {
  return (

    <Container fluid className="App">
      <Navbar />
      <Container fluid className='mainBody' style={{margin: '5px'}}>
        <Row style={{margin: '2px'}}>
          <Col><Builder /></Col>
          <Col><Leader /></Col>
          <Col><Optimizer /></Col>
        </Row>
        <Row style={{margin: '2px'}}>
          <Col><ProblemSolver /></Col>
          <Col><Student /></Col>
          <Col><Teammate /></Col>
        </Row>
      </Container>
    </Container>

  );
}

export default App;
