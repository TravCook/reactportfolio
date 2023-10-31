import {Row, Col, DropdownButton} from 'react-bootstrap'
import './navbar.css'

const Navbar = () => {
    return (
        <Row className='navbarStyle'>
            <Col lg='2' style={{margin: 'auto'}}> RESUME
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