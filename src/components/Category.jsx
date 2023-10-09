import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Category = ({clicked,allCat}) => {

    const onfilter= (cat)=>{
        clicked(cat)
    }
    return (
        <Row className='my-2 mb-5'>
            <Col sm="12" className='d-flex justify-content-center'>
                {allCat.length >= 1 ? (allCat.map((bu)=>{
                    return(
                        <div>
                            <button onClick={()=>{onfilter(bu)}} className='btn mx-2'>{bu}</button>
                        </div>
                    )
                })): <h3> لا يوجد</h3>}
                
            </Col>
        </Row>
    )
}

export default Category
