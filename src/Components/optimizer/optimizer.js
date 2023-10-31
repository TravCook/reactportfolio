import {Card, Row} from 'react-bootstrap'
import { useState } from 'react'

const Optimizer = () => {
    const [clicked, setClicked] = useState(true)

    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return(
        clicked ? <Card style={{height: 408, display: 'flex'}} onClick={handleClick}><Card.Title style={{margin: 'auto' }}>TRAVIS COOK IS A...</Card.Title></Card> : 
        <Card style={{height: 408}} onClick={handleClick}>
            <Card.Title style={{fontSize: 24, margin: 0}}>Optimizer</Card.Title>
            <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <Row style={{padding: 7}}>
                        Known for implementing streamlined processes and methodologies in food, manufacturing, and software engineering, consistently seeking and executing ways to enhance efficiency without compromising quality.
                    </Row>
                    <Row style={{padding: 7}}>
                        Demonstrated dedication to the principles of continuous improvement in various fields, applying a proactive approach to identify and implement innovative solutions that optimize operations and workflows, fostering a culture of perpetual advancement.
                    </Row>
                    <Row style={{padding: 7}}>
                        Adept at raising quality standards across different industries, employing a meticulous eye for detail to ensure that products and services meet or exceed exceptional quality benchmarks.
                    </Row>
            </Card.Body>
        </Card>
    )
}

export default Optimizer