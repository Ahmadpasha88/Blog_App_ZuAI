import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from "react-icons/cg";


function Header() {
  return (
    <Navbar expand="lg" className="bg-dark shadow-sm">
      <Container className='bg-transparent' fluid>
        <Navbar.Brand className='fw-bolder fs-3 bg-transparent text-white' href="/">Bloger</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='bg-transparent' id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 gap-4 fw-bold bg-transparent"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' href="/">Home</Nav.Link>
            <Nav.Link className='text-white' href="/contact_us">Contact Us</Nav.Link>
            <Nav.Link className='text-white' href='/about' >About</Nav.Link>

           
          </Nav>
          <div className='p-3 bg-transparent'>
            <CgProfile role='button' className='fw-bold fs-1 bg-transparent'/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;