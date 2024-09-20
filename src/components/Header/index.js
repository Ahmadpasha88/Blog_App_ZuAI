import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Header() {
  const isLogedIn = Cookies.get("token");
  const navigate = useNavigate();

  const hadelLogout = () => {
    Cookies.remove("token");
    navigate("/login", { replace: true });
  };

  return (
    <Navbar expand="lg" className="bg-dark shadow-sm">
      <Container className="bg-transparent" fluid>
        <Navbar.Brand
          className="fw-bolder fs-3 bg-transparent text-white"
          href="/"
        >
          Blogger
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{color:'white',backgroundColor:'white'}} />
        <Navbar.Collapse className="bg-transparent" id="navbarScroll" style={{color:'white',backgroundColor:'white'}}>
          <Nav
            className="m-auto my-2 my-lg-0 gap-4 fw-bold bg-transparent"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-white" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-white" href="/contact_us">
              Contact Us
            </Nav.Link>
           
            {isLogedIn && (
              <Nav.Link className="text-white" href="/allPosts">
                All Posts
              </Nav.Link>
            )}
          </Nav>
          {isLogedIn ? (
            <button className="btn btn-danger" onClick={hadelLogout}>
              Logout
            </button>
          ) : (
            <Nav.Link className="text-white" href="/register">
              Register/Login
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
