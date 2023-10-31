import {Card, Row} from 'react-bootstrap'
import { useState } from 'react'

const ProblemSolver = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return(
        <Card className={clicked ? 'flip' : 'unflip'} style={{height: 408 }} onClick={handleClick}>
            {clicked ? <Card.Title className="cardBack" style={{fontSize: 24, margin: 0}}>Problem Solver</Card.Title> :
            <Card.Title className="cardFront" style={{margin: 'auto'}}>TRAVIS COOK IS A...</Card.Title> }
            {clicked ? <Card.Body className="cardBack" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <Row style={{padding: 7}}>
                        Recognized for crafting innovative and out-of-the-box solutions to intricate problems, leveraging a mix of creativity and analytical thinking to address issues effectively in different professional realms.
                    </Row>
                    <Row style={{padding: 7}}>
                        Proficient in dissecting multifaceted problems, employing an adaptive and analytical mindset to break down issues systematically and develop strategic solutions.
                    </Row>
                    <Row style={{padding: 7}}>
                        Known for swift and efficient decision-making in high-pressure situations, adeptly navigating complex problem landscapes and providing quick yet effective resolutions.
                    </Row>
            </Card.Body> : null}
        </Card>
    )
}

export default ProblemSolver