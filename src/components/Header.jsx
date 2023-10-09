import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <Row>
        <Col className='justify-content-center text-center' sm="12">
            <div className="title">قائمه طعام</div>
            <div className="justify-content-center text-center d-flex">
            <div className="underline"></div>
            </div>
        </Col>
    </Row>
  )
}

export default Header
