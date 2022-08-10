import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const CreateTodo = () => {
  const [todos, setTodos] = useState({
    id: "",
    userId: "",
    title: "",
    completed: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodos({ ...todos, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = localStorage.getItem("todos");
    let { id, title } = todos;
    if (arr !== null) {
      let arr = JSON.parse(localStorage.getItem("todos"));
      let newArr = [...arr, todos];
      const filteredTodo = newArr.filter(
        (ft) => ft.id === id || ft.title === title
      );
      if (filteredTodo.length > 1) {
        alert("this id or title is already exist in database ");
        setTodos({ id: "", userId: "", title: "" });
      } else {
        localStorage.setItem("todos", JSON.stringify(newArr));
        setTodos({ id: "", userId: "", title: "" });
      }
    } else {
      let arr = [todos];
      localStorage.setItem("todos", JSON.stringify(arr));
      setTodos({ id: "", userId: "", title: "" });
    }
  };
  return (
    <>
      <Card body style={{ width: "20rem", margin: "20px auto" }}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter id"
              name="id"
              value={todos.id}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User Id"
              name="userId"
              value={todos.userId}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={todos.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Text className="text-muted">
            Go back<Link to="/todo">back</Link>
          </Form.Text>{" "}
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default CreateTodo;
