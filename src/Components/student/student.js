import {Card, Row} from 'react-bootstrap'
import { useState } from 'react'

const Student = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return(
        <Card className={clicked ? 'flip' : 'unflip'} style={{height: 408 }} onClick={handleClick}>
            {clicked ? <Card.Title className="cardBack" style={{fontSize: 24, margin: 0}}>Student</Card.Title> :
            <Card.Title className="cardFront" style={{margin: 'auto'}}>TRAVIS COOK IS A...</Card.Title> }
            {clicked ? <Card.Body className="cardBack" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <Row style={{padding: 7}}>
                        Recognized for the ability to swiftly grasp new concepts and ideas across multiple disciplines, demonstrating a quick learning curve and a passion for continuous knowledge acquisition.
                    </Row>
                    <Row style={{padding: 7}}>
                        Proficient in adapting to diverse learning environments, leveraging an innate ability to absorb information rapidly, effectively utilizing varied study techniques to assimilate and apply new knowledge across different subject matters.
                    </Row>
                    <Row style={{padding: 7}}>
                        Demonstrated commitment to lifelong learning, driven by an insatiable curiosity and a thirst for knowledge, consistently seeking out new information and embracing ongoing self-improvement.
                    </Row>
            </Card.Body> : null }
        </Card>
    )
}

export default Student