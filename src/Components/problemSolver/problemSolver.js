import {Card, Row} from 'react-bootstrap'
import { useState } from 'react'

const ProblemSolver = () => {
    const [clicked, setClicked] = useState(true)

    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return(
        clicked ? <Card style={{height: 408, display: 'flex'}} onClick={handleClick}><Card.Title style={{margin: 'auto' }}>TRAVIS COOK IS A...</Card.Title></Card> : 
        <Card style={{height: 408}} onClick={handleClick}>
            <Card.Title style={{fontSize: 24, margin: 0}}>Problem Solver</Card.Title>
            <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <Row style={{padding: 7}}>
                        Recognized for crafting innovative and out-of-the-box solutions to intricate problems, leveraging a mix of creativity and analytical thinking to address issues effectively in different professional realms.
                    </Row>
                    <Row style={{padding: 7}}>
                        Proficient in dissecting multifaceted problems, employing an adaptive and analytical mindset to break down issues systematically and develop strategic solutions.
                    </Row>
                    <Row style={{padding: 7}}>
                        Known for swift and efficient decision-making in high-pressure situations, adeptly navigating complex problem landscapes and providing quick yet effective resolutions.
                    </Row>
            </Card.Body>
        </Card>
    )
}

export default ProblemSolver