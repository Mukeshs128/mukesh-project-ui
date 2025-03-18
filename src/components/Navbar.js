import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-sticky nav-bar">
      <Container className='my-auto mx-auto'>
      <Navbar.Brand className='logo' href="#">
          <img
            src={"/image/logo.png"}
            alt="Logo"
            width="40" 
            height="40"
            className="d-inline-block align-top "
          />{' '}
          LOVU
        </Navbar.Brand>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Nav.Link className='custome-link pe-3' href="#CUPID TRIP DESIGNER">CUPID TRIP DESIGNER</Nav.Link>
            <Nav.Link className='custome-link pe-3' href="#DESTINATIONS">DESTINATIONS</Nav.Link>
            <Nav.Link className='custome-link pe-3' href="#COLLECTIONS">COLLECTIONS</Nav.Link>
            <Nav.Link className='custome-link' href="#OCCASSIONS">OCCASSIONS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-light" className='me-3'>JOIN NOW</Button>
        <Button variant="transparant" className='text-light'>LOG-IN</Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;