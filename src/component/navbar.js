import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown, Col }
    from 'react-bootstrap';


export default class Navebar extends Component {




    render() {



        return (
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Hello</Navbar.Brand>
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="/">Welcome</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}
