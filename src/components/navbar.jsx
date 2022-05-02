import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


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
                        <Nav.Link as={Link} to={"/settings"}>Settings</Nav.Link>
                        <NavDropdown title="Admin" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/admin/part1">Part1</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/part2">Part2</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/part3">Part3</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/part4">Part4</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/part5">Part5</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/part6">Part6</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/part7">Part7</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/part8">Part8</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/part9">Part9</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to={"/login"}>
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar