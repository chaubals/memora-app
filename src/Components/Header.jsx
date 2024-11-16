const Header = () => {
  return (
    <div className="bs-header">
      <Navbar bg="primary" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Memora</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Flashcards</Nav.Link>
              <Nav.Link href="#link">Blogs</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button className="btn btn-primary" type="submit">
                  Search
                </Button>
              </form>
            </Nav>
            <Button className="btn- btn-primary ms-2">Sign in</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
