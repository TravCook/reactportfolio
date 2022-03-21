import "./skillBreakdown.css"
import express from '../../public/express.png'
import mongo from '../../public/mongodb.png'
import react from '../../public/react.png'
import node from '../../public/node_js.png'
import {Container, Row, Col, Card} from 'react-bootstrap'

function skillBreakdown(){
  return(
   <Container className="skillContainer">
     <Row className="techStack">
        <Col>
          <Card>
            <Card.Img className="techPicture" variant="top" src={mongo} />
            <Card.Title>MongoDB</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img className="techPicture" variant="top" src={express} />
            <Card.Title>Express API Routing</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img className="techPicture" variant="top" src={react} />
            <Card.Title>React</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img className="techPicture" variant="top" src={node} />
            <Card.Title>Node.js</Card.Title>
          </Card>
        </Col>
     </Row>
     <Row>
       <Col>
        <Row>
          <Col>FRONT END</Col>
        </Row>
       </Col>
       <Col>
        <Row>
          <Col>BACK END</Col>
        </Row>
       </Col>
     </Row>
   </Container> 
  )
}

export default skillBreakdown