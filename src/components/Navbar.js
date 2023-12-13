import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbars=()=>{
return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">ShoesStore</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Accueil</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

)

}
export default Navbars