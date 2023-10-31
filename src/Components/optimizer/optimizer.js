import {Card, Row} from 'react-bootstrap'
import { useState } from 'react'

const Optimizer = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return(
        <Card className={clicked ? 'flip' : 'unflip'} style={{height: 408 }} onClick={handleClick}>
            {clicked ? <Card.Title className="cardBack" style={{fontSize: 24, margin: 0}}>Optimizer</Card.Title> :
            <Card.Title className="cardFront" style={{margin: 'auto'}}>TRAVIS COOK IS A...</Card.Title> }
            {clicked ? <Card.Body className="cardBack" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <Row style={{padding: 7}}>
                        Known for implementing streamlined processes and methodologies in food, manufacturing, and software engineering, consistently seeking and executing ways to enhance efficiency without compromising quality.
                    </Row>
                    <Row style={{padding: 7}}>
                        Demonstrated dedication to the principles of continuous improvement in various fields, applying a proactive approach to identify and implement innovative solutions that optimize operations and workflows, fostering a culture of perpetual advancement.
                    </Row>
                    <Row style={{padding: 7}}>
                        Adept at raising quality standards across different industries, employing a meticulous eye for detail to ensure that products and services meet or exceed exceptional quality benchmarks.
                    </Row>
            </Card.Body> : null }
        </Card>
    )
}

export default Optimizer