import {Card, Row} from 'react-bootstrap'
import { useState } from 'react'

const Leader = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return(
        <Card className={clicked ? 'flip' : 'unflip'} style={{height: 408 }} onClick={handleClick}>
            {clicked ? <Card.Title className="cardBack" style={{fontSize: 24, margin: 0}}>Leader</Card.Title> :
            <Card.Title className="cardFront" style={{margin: 'auto'}}>TRAVIS COOK IS A...</Card.Title> }
            {clicked ? <Card.Body className="cardBack" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <Row style={{padding: 7}}>
                        Adept at formulating and communicating a compelling vision, inspiring teams across diverse industries with a clear sense of purpose and direction, fostering a collective drive towards shared goals.
                    </Row>
                    <Row style={{padding: 7}}>
                        Demonstrated versatility in leadership, adeptly adapting management styles to suit the unique needs of each company and team, cultivating a collaborative environment that empowers individuals to thrive and excel.
                    </Row>
                    <Row style={{padding: 7}}>
                        Strong advocate for team empowerment, fostering a culture of mentorship, and consistently nurturing talent within teams, encouraging growth, and skill development, thereby fostering an environment of innovation and productivity.
                    </Row>
            </Card.Body> : null }
        </Card>
    )
}

export default Leader