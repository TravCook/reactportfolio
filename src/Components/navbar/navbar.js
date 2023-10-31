import {Row, Col, Button} from 'react-bootstrap'
import './navbar.css'

const Navbar = (props) => {
    return (
        <Row className='navbarStyle'>
            <Col lg='2' style={{margin: 'auto'}}> <a href={props.resume} style={{fontSize: 22, color: '#F5F5F5'}} target='_blank' rel='noopener noreferrer' >My Resume</a>
            </Col>
            <Col style={{fontSize: '42px'}}>WHO IS TRAVIS COOK</Col>
            <Col lg='2'>
                    <Row>Email: traviscookdev@gmail.com</Row>
                    <Row>Github: github.com/travcook</Row>
                    <Row>LinkedIn: linkedin.com/in/travis-cook93</Row>
            </Col>
        </Row>
       
    )
}

export default Navbar