import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="color-nav">
            <Navbar.Brand href="#Home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#AboutMe">About</Nav.Link>
                    <Nav.Link href="#Projects">Projects</Nav.Link>
                    <Nav.Link href="#Resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar;