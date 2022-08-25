import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

function NavBar(){
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Frontend Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/curriculum">About me</Nav.Link>
            <NavDropdown title="React" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/list">DRINK API REST | GET</NavDropdown.Item>
                <NavDropdown.Item href="https://react-api-album.netlify.app/">PHOTO ALBUM API</NavDropdown.Item>
                <NavDropdown.Item href="https://open-movies-database.netlify.app/">OPEN MOVIES API - working progress</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link eventKey={2} href="/login">
                Log-in
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBar