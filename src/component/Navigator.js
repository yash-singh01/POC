import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navigator() {
  const navigate = useNavigate();
  const createTodo = () => {
    return navigate("/createtodo");
  };

  return (
    <>
      <Navbar bg="dark" expand="sm">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
            Todo List
          </Navbar.Brand>
          <Link to="/createtodo">
            <Button className="float-end my-2" type="submit" variant="primary">
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                {" "}
                Log Out
              </Link>
            </Button>
            <Button
              className="float-end my-2"
              type="submit"
              variant="primary"
              style={{ margin: "8px" }}
              onClick={() => createTodo()}>
                {" "}
                Create todo
            </Button>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </>
  );
}
