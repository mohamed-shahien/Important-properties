import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const ItemsList = ({cards}) => {
    return (

        <Row>
            {cards.length >= 1 ? (
                cards.map((item,index)=> (
                    <Col className='mb-3' sm="12" key={index}>
            
                <Card className='d-flex flex-row' style={{background:"#f8f8f8"}}>
                    <Card.Img className='img-item' variant="top" src={item.imgurl} alt='dd'/>
                    <Card.Body>
                    <Card.Title className='d-flex justify-content-between'>
                        <div className="item-title">{item.title}</div>
                        <div className="item-price">{item.price}</div>
                    </Card.Title>
    
                    <Card.Text>
                    <div className="item-dec">
                        {item.desc}
                    </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                ))
            ): <h3 className='text-center'>لايوجد بيانات</h3>}
            
        </Row>
    )
}

export default ItemsList
