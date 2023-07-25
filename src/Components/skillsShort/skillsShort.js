import {Container, Row, Col, Card} from 'react-bootstrap'

const SkillsShort = () => {
    return (
        <Container fluid style={{fontSize: 36, color: 'gold', marginTop: 25, marginBottom: 25}}>
            <Row>
                <Col>
                    <Card style={{backgroundColor: '#3498DB'}}>
                        <Container>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        </Container>
                        <Card.Title style={{color: '#333333'}}>Front End</Card.Title>
                    </Card>
                </Col>
                <Col>
                    <Card style={{backgroundColor: '#3498DB'}}>
                        <Container>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        </Container>
                        <Card.Title style={{color: '#333333'}}>Back End</Card.Title>
                    </Card>
                </Col>
                <Col>
                    <Card style={{backgroundColor: '#3498DB'}}>
                        <Container>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        </Container>
                        <Card.Title style={{color: '#333333'}}>Databases</Card.Title>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SkillsShort