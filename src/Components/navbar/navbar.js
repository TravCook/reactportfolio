import {Row, Col} from 'react-bootstrap'
import './navbar.css'

const Navbar = (props) => {
    return (
        <Row className='navbarStyle'>
            <Col lg='2' style={{margin: 'auto'}}>
                <Col><a href={props.resume} style={{fontSize: 22, color: '#F5F5F5'}} target='_blank' rel='noopener noreferrer'>My Resume</a></Col>
                <Col><a href={props.resume} style={{fontSize: 22, color: '#F5F5F5'}} download>Download</a></Col> 
            
            </Col>
            <Col style={{fontSize: '42px', margin: 'auto'}}>WHO IS TRAVIS COOK?</Col>
            <Col lg='2'>
                    <Row><a style={{fontSize: 18, color: '#F5F5F5'}} href='mailto:traviscookdev@gmail.com' >traviscookdev@gmail.com</a></Row>
                    <Row><a style={{fontSize: 18, color: '#F5F5F5'}} href="https://github.com/TravCook" target="_blank" rel='noopener noreferrer'>github.com/travcook</a></Row>
                    <Row><a style={{fontSize: 18, color: '#F5F5F5'}} href="https://linkedin.com/in/travis-cook93" target="_blank" rel='noopener noreferrer'>linkedin.com/in/travis-cook93</a></Row>
            </Col>
        </Row>
       
    )
}

export default Navbar