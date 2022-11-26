import "./NavBar.css";
import CartWidget from "../cartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Navegacion() {
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="xl">
                <Container>
                    <Navbar.Brand href="#home">BAD</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#todos">Todos</Nav.Link>
                        <Nav.Link href="#sencillos">Estilos Sencillos</Nav.Link>
                        <Nav.Link href="#complejos">Estilos complejos</Nav.Link>
                    </Nav>
                </Container>
                <CartWidget />       
            </Navbar>

        </>
    );
}

export default Navegacion;
