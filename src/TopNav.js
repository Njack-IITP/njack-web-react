import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import njackLogo from './images/njacklogo.png'

function TopNav() {
    return (
        <div>
            <Navbar bg="light" expand="md">
                <Navbar.Brand href="#home">
                    <img
                        src={njackLogo}
                        className="d-inline-block align-top"
                        alt="Njack logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"><h3>About</h3></Nav.Link>
                        <Nav.Link href="#link"><h3>Events</h3></Nav.Link>
                        <Nav.Link href="#link"><h3>NWoC</h3></Nav.Link>
                        <Nav.Link href="#link"><h3>Clubs</h3></Nav.Link>
                        
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 searchBar" />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default TopNav;