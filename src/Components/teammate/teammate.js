import {Card, Row} from 'react-bootstrap'
import { useState } from 'react'

const Teammate = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return(
        <Card className={clicked ? 'flip' : 'unflip'} style={{height: 408 }} onClick={handleClick}>
            {clicked ? <Card.Title className="cardBack" style={{fontSize: 24, margin: 0}}>Teammate</Card.Title> :
            <Card.Title className="cardFront" style={{margin: 'auto'}}>TRAVIS COOK IS A...</Card.Title> }
            {clicked ? <Card.Body className="cardBack" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <Row style={{padding: 7}}>
                        Known for fostering a collaborative environment, encouraging and supporting team members while valuing diverse perspectives and contributions towards achieving shared team goals.
                    </Row>
                    <Row style={{padding: 7}}>
                        Skilled at active listening and understanding the needs of team members, maintaining open and effective communication channels, thereby fostering an inclusive and supportive team culture.
                    </Row>
                    <Row style={{padding: 7}}>
                        Recognized for actively promoting shared team goals and driving collective achievement, demonstrating a commitment to teamwork and a willingness to go the extra mile for the overall success of the team.
                    </Row>
            </Card.Body> : null }
        </Card>
    )
}

export default Teammate