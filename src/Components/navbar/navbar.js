import {Row, Col, Button} from 'react-bootstrap'
import './navbar.css'
import resume from '../../public/Travis_Cook_ResumePDF.pdf'

const Navbar = () => {
    return (
        <Row className='navbarStyle'>
            <Col lg='2' style={{margin: 'auto'}}> <a style={{fontSize: 22, color: '#F5F5F5'}} download href={resume}>My Resume</a>
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