import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="navbar-fondo">
          <Navbar.Brand href="#home">
            <img src="logogym.png" alt="" width={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="btn-navbar" href="#home">
                Inicio
              </Nav.Link>
              <Nav.Link className="btn-navbar" href="#link">
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link className="btn-navbar" href="#link">
                Contacto
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link className="btn-navbar" href="#home">
                Iniciar Sesión
              </Nav.Link>
              <Nav.Link className="btn-navbar" href="#link">
                Registrarse
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
