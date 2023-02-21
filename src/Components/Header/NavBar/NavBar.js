import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";
import { LinkComponent, SocialComponent } from "../../../utils/links";
import { useGlobalContext } from "../../../context";

function NavBar() {
  const { openSidebar } = useGlobalContext();

  return (
    <>
      <nav className="nav">
        <div className="container nav-container">
          <header className="nav-header">
            <Link to="/" className="nav-brand">
              <h3>Frontend Portfolio</h3>
            </Link>
            <div>
              <button
                className="icon-btn btn nav-toggler"
                onClick={openSidebar}
              >
                <FaBars className="nav-icon" />
              </button>
            </div>
          </header>
          <LinkComponent classLink="nav-links" />
          <SocialComponent classSocial="socialTop" />
        </div>
      </nav>
      {/*<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Frontend Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/curriculum">About me</Nav.Link>
            <NavDropdown title="React" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/list">
                DRINK API REST | GET
              </NavDropdown.Item>
              <NavDropdown.Item href="https://react-trip-lombardy.netlify.app/">
                TRAVEL WITH API
              </NavDropdown.Item>
              <NavDropdown.Item href="https://react-events-calendary.netlify.app/">
                EVENTS
              </NavDropdown.Item>
              <NavDropdown.Item href="https://react-api-album.netlify.app/">
                PHOTO ALBUM API
              </NavDropdown.Item>
              <NavDropdown.Item href="https://open-movies-database.netlify.app/">
                OPEN MOVIES API - working progress
              </NavDropdown.Item>
              <NavDropdown.Item href="https://react-e-commerce-rayban.netlify.app/">
                RAYBAN E-COMMERCE - working progress{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="https://react-users-github.netlify.app/">
                USERS API - working progress{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="https://react-dark-mode-theme.netlify.app/">
                DARK MODE THEME
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/login">
              Log-in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar> */}
    </>
  );
}

export default NavBar;
