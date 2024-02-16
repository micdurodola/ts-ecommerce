import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand>TS-ECOMMERCE</Navbar.Brand>
              <Nav>
                <a href="/cart" className="nav-link">
                  Cart
                </a>
                <a href="/signin" className="nav-link">
                  Sign In
                </a>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Outlet />
          </Container>
        </main>
        <footer className="text-center">All right reserved</footer>
      </div>
    </>
  );
}

export default App;
