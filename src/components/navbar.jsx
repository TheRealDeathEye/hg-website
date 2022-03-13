import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import logo from '../imgs/logo.png';

export default function Topbar(){
    return(
        <div>
        <Navbar bg="light" variant="light" sticky='top'>
            <Container>
            <Navbar.Brand>
                <Link to="/"><img src={logo} width='40' alt='' /></Link>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link><Link to="/about">Board of Executives</Link></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <hr class='solid' />
        </div>
    );
}