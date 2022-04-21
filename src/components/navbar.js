import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" onChange={e => e.preventDefault()}>
            <Container>
                <Navbar.Brand href="#home">Comp440 Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/initialize"}>Initialize</Nav.Link>
                        <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                        <Nav.Link eventKey={2}  as={Link} to={"/login"}>
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar