import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand= "lg" collapseOnSelect >
          <Container>
          <Navbar.Brand href="/">Pro </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="ms-auto">
            <Nav.Link href="#"></Nav.Link>
            <Nav.Link href="#home">
              <FaShoppingCart />
              Cart
             </Nav.Link>
             <Nav.Link href="#link">
              <FaUser />
              Sign In
             </Nav.Link>
          </Nav>
          </Navbar.Collapse>
         </Container>
       </Navbar>
     </header>
   );
 };
 
export default Header;


