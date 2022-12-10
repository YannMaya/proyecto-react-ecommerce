import "./NavBar.css";
import CartWidget from "../cartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"

function Navegacion() {
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="xl">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src="https://res.cloudinary.com/dt1bumvty/image/upload/v1669481743/Untitled_design_5_rvfynv.png" alt="" width="50" height="50" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Todos</Nav.Link>
                        <Nav.Link as={Link} to="/category/sencillos">Estilos Sencillos</Nav.Link>
                        <Nav.Link as={Link} to="/category/complejos">Estilos complejos</Nav.Link>
                    </Nav>
                </Container>
                <CartWidget />       
            </Navbar>

        </>
    );
}

export default Navegacion;
