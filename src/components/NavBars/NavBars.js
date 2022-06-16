
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBars = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Nav className="me-auto">
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="/sign-up">Sing up</Nav.Link>
            <Nav.Link href="/sign-in">Sign in</Nav.Link>
            <Nav.Link href="/statistics">Statistics</Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>
            <Nav.Link href="/quiz">Quiz</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
        </div>
    );
}

export default NavBars;