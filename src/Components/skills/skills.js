import './skills.css'
import {Container, Row, Col, Card} from 'react-bootstrap'

function Skills(){
  return(
    <Container fluid id="skills" className="skillContainer" >
      <Row>
        <Col>
          <div>FRONT END
            <div>ReactJS
              <div className="baseBar">
                <div className="reactBar">.</div>
              </div>
            </div>
            <div>HTML
              <div className="baseBar">
                <div className="htmlBar">.</div>
              </div>
            </div>
            <div >Tailwind
              <div className="baseBar">
              <div className="TailwindBar">.</div>
              </div>
            </div>
            <div>Bootstrap
              <div className="baseBar">
                <div className="BootstrapBar">.</div>
              </div>
            </div>
            <div>CSS
              <div className="baseBar">
                <div className="CSSBar">.</div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
        <div>BACK END
            <div>NodeJS
              <div className="baseBar">
                <div className="TailwindBar">.</div>
              </div>
            </div>
            <div>Express
              <div className="baseBar">
                <div  className="TailwindBar">.</div>
              </div>
            </div>
            <div>SQL
              <div className="baseBar">
                <div className="TailwindBar">.</div>
              </div>
            </div>
            <div>NOSQL
              <div className="baseBar">
                <div className="TailwindBar">.</div>
              </div>
            </div>
            <div>GraphQL
              <div className="baseBar">
                <div className="TailwindBar">.</div>
              </div>
            </div>
          </div>
        </Col>        
        <Col>
          <div>Soft Skills / General Tech
            <div>Communication
              <div className="baseBar">
                <div className="reactBar">.</div>
              </div>
            </div>
            <div>Dedication
              <div className="baseBar">
                <div className="TailwindBar">.</div>
              </div>
            </div>
            <div >Git/Github/Gitlab
              <div className="baseBar">
                <div  className="TailwindBar">.</div>
              </div>
            </div>
            <div>Agile Workflow
              <div className="baseBar">
                <div className="TailwindBar">.</div>
              </div>
            </div>
            <div>Positivity
              <div className="baseBar">
                <div className="TailwindBar">.</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills