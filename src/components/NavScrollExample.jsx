import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample({Filtersearch}) {
    const [wordsearch,setWordsearsh]= useState("");

    const onSearch=()=>{
        Filtersearch(wordsearch)
        setWordsearsh("")
    }

    return (
        <Row>
        <Navbar expand="lg"  bg="dark" variant='dark'>
        <Container>
            <Navbar.Brand href="#">مطعم جديد</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="text"
                placeholder="ابحث هنا.."
                className="mx-2"
                onChange={(e)=>{setWordsearsh(e.target.value)}}
                value={wordsearch}
                />
                <Button variant="outline-success"
                onClick={()=>{onSearch()}}
                >بحث</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Row>
    );
}

export default NavScrollExample;