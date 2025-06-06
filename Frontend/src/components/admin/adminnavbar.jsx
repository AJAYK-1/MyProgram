import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function AdminNavbar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">MySite</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/adminhome">Home</Nav.Link>
                        <Nav.Link href="/adminlogin">Admin Login</Nav.Link>
                        <Nav.Link href="/login">User Login</Nav.Link>
                        <Nav.Link href="/adminviewuser">View User</Nav.Link>
                        <Nav.Link href="/adminaddpro">Add Product</Nav.Link>
                        <Nav.Link href="/adminviewproducts">View Product</Nav.Link>
                        <Nav.Link href="/commonhome">Logout</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    );
}

export default AdminNavbar;