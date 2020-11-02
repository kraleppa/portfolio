import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="color-nav">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="#PageTop">Home</Nav.Link>
                    <Nav.Link href="#AboutMe">About</Nav.Link>
                    <Nav.Link href="#Projects">Projects</Nav.Link>
                    <Nav.Link href="#Resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar;