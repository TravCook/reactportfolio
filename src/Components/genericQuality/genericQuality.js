import {Card, Row} from 'react-bootstrap'
import { useState } from 'react'

const GenericQuality = (props) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return(
        <Card className={clicked ? 'flip' : 'unflip'} style={{height: 408 }} onClick={handleClick}>
            {clicked ? <Card.Title className="cardBack" style={{fontSize: 24, margin: 0}}>{props.quality.quality}</Card.Title> :
            <Card.Title className="cardFront" style={{margin: 'auto'}}>TRAVIS COOK IS...</Card.Title> }
            {clicked ? <Card.Body className="cardBack" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <Row className='hiddenOnMobile' style={{padding: 7}}>
                        {props.quality.descripOne}
                    </Row>
                    <Row className='hiddenOnMid' style={{padding: 7}}>
                        {props.quality.descripTwo}
                    </Row>
                    <Row className='hiddenOnMobile' style={{padding: 7}}>
                        {props.quality.descripThree}
                    </Row>
            </Card.Body> : null }
        </Card>
    )
}

export default GenericQuality