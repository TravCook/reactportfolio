import {Row, Col} from 'react-bootstrap'
import './navbar.css'

const Navbar = (props) => {
    return (
        <Row className='navbarStyle'>
            <Col style={{fontSize: '42px', margin: 'auto'}}>WHO IS TRAVIS COOK?</Col>
            <Col lg='2' style={{margin: 'auto'}}>
                <Col><a href={props.resume} style={{fontSize: 22, color: '#F5F5F5'}} target='_blank' rel='noopener noreferrer'>My Resume</a></Col>
                <Col className="hiddenOnMobile"><a href={props.resume} style={{fontSize: 22, color: '#F5F5F5'}} download>Download</a></Col> 
            
            </Col>
            
            {/* <Col lg='2'>
                    <Row><Col xs={2}><img style={{width: '20px'}} src={props.emailIcon} /></Col><Col className='hiddenOnMobile'><a style={{fontSize: 18, color: '#F5F5F5'}} href='mailto:traviscookdev@gmail.com'>traviscookdev@gmail.com</a></Col></Row>
                    <Row><Col xs={2}><img style={{width: '20px'}} src={props.gitHubIcon} /></Col><Col className='hiddenOnMobile'><a style={{fontSize: 18, color: '#F5F5F5'}} href="https://github.com/TravCook" target="_blank" rel='noopener noreferrer'>github.com/travcook</a></Col></Row>
                    <Row><Col xs={2}><img style={{width: '20px'}} src={props.linkedInIcon}/></Col><Col className='hiddenOnMobile'><a style={{fontSize: 18, color: '#F5F5F5'}} href="https://linkedin.com/in/travis-cook93" target="_blank" rel='noopener noreferrer'>linkedin.com/in/travis-cook93</a></Col></Row>
            </Col> */}
        </Row>
       
    )
}

export default Navbar