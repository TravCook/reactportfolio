import "./projects.css"
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import projectArr from '../../public/projects.json'

function projects(){
  console.log(projectArr)
  return (
    <Container className='test'>
      <Row lg={2}>
      {projectArr.map((project) => {
        return(
          <Col>
            <Card className="projCard">
              <Card.Img variant="top" src={project.screenshot} className="projectPic" />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Row>
                  <Col>
                    <Button target="_blank" rel="noreferrer" variant="primary" href={project.liveLink}>Take me there!</Button>
                  </Col>
                  <Col>
                    <Button target="_blank" rel="noreferrer" variant="primary" href={project.repoLink}>Check out the Repo!</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
      </Row>
    </Container>
  )
}

export default projects