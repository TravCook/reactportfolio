import {Col, Row, Card, Container} from 'react-bootstrap'
const FeaturedProjects = () => {
    return (
        <Container>
             FEATURED PROJECTS
            <Row>
                <Col>
                    <Card style={{backgroundColor: '#3498DB', color: '#333333', margin: 15, padding: 10}}>
                    <Card.Title>Homework Tracker</Card.Title>
                        {/* <div>image</div> */}
                        <div>This comprehensive tool allows educators to view a dynamic roster of their current class and effortlessly track each student's homework submissions. With real-time updates, instructors can stay informed about assignments turned in and those that still need attention. This intuitive app streamlines the process of providing timely feedback to students, optimizing class engagement and enhancing the overall learning experience for both educators and learners.</div>
                        <Row>
                            <Col style={{margin: 10}}>TECHNOLOGIES</Col>
                        </Row>
                        <Row>
                            <Col>ReactJS</Col>
                            <Col>Express</Col>
                            <Col>Node</Col>
                            <Col>Bootstrap</Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card style={{backgroundColor: '#3498DB', color: '#333333', margin: 15, padding: 10}}>
                    <Card.Title>Teambuilder</Card.Title>
                        {/* <div>image</div> */}
                        <div>As an avid fan of MLB The Show, I wanted to enhance the gaming experience by creating a sidekick app that allows users to customize and save their unique baseball teams. Built on the MERN stack, this app empowers players to curate their dream lineups with favorite players and assign them to specific positions. Users are also able to save multiple custom teams to their account, so they can be easily recalled and edited later.</div>
                        <Row>
                            <Col style={{margin: 10}}>TECHNOLOGIES</Col>
                        </Row>
                        <Row>
                            <Col>ReactJS</Col>
                            <Col>Express</Col>
                            <Col>Node</Col>
                            <Col>MongoDB</Col>
                            <Col>JWT</Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
       </Container>
    )
}

export default FeaturedProjects