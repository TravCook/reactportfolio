import {Card, Row, Col} from 'react-bootstrap'
import { useState } from 'react'

const Builder = () => {
    const [clicked, setClicked] = useState(true)

    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }

    return(
        clicked ? <Card style={{height: 408, display: 'flex', transform: 'rotateY(var( — rotate-y, 0))'}} onClick={handleClick}><Card.Title style={{margin: 'auto' }}>TRAVIS COOK IS A...</Card.Title></Card> : 
        <Card style={{height: 408, }} onClick={handleClick}>
            <Card.Title style={{fontSize: 24, margin: 0}}>Builder</Card.Title>
            <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <Row style={{padding: 7}}>
                        Successfully crafted and deployed highly intuitive and responsive web solutions, implementing cutting-edge technologies to deliver user-centric designs that enhance functionality and user experience.
                    </Row>
                    <Row style={{padding: 7}}>
                        Demonstrated a meticulous approach to manufacturing, consistently achieving optimal quality control standards and leveraging innovative techniques to enhance production efficiency while maintaining a strong focus on precision and safety.
                    </Row>
                    <Row style={{padding: 7}}>
                        Proficient in integrating diverse skills across various domains, seamlessly translating concepts between industries, from designing complex web architectures to the meticulous building and assembly in manufacturing, demonstrating versatility in problem-solving.
                    </Row>
            </Card.Body>
        </Card>
    )
}

export default Builder