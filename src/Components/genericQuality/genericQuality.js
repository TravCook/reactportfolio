import {Card, Row} from 'react-bootstrap'
import { useState } from 'react'

const GenericQuality = (props) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return(
        <Card className={clicked ? 'flip' : 'unflip'} style={{height: 445 }} onClick={handleClick}>
            {clicked ? <Card.Title className="cardBack" style={{fontSize: 30, margin: 0}}>{props.quality.quality}</Card.Title> :
            <Card.Title className="cardFront" style={{margin: 'auto', fontSize: 40}}>TRAVIS COOK IS...</Card.Title> }
            {clicked ? <Card.Body className="cardBack" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <Row className={(props.quality.quality=='Experienced' || 'Educated' || 'Skilled') ?null : 'hiddenOnMobile'} style={{padding: 7}}><Card.Title>{props.quality.subTitleOne}</Card.Title>
                        {props.quality.descripOne}
                    </Row>
                    <Row className={(props.quality.quality=  'Educated'  ) ? 'hiddenOnMid' : 'hiddenOnMobile'} style={{padding: 7}}><Card.Title>{props.quality.subTitleTwo}</Card.Title>
                        {props.quality.descripTwo}
                    </Row>
                    <Row className={(props.quality.quality=='Experienced' || 'Educated' || 'Skilled') ?null : 'hiddenOnMobile'} style={{padding: 7}}><Card.Title>{props.quality.subTitleThree}</Card.Title>
                        {props.quality.descripThree}
                    </Row>
            </Card.Body> : null }
        </Card>
    )
}

export default GenericQuality