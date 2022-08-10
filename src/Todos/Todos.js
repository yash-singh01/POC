import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import Navigator from "../component/Navigator";
import { useQuery } from "@tanstack/react-query";
import Form from "react-bootstrap/Form";
import axios from "axios";
const GetData = async () => {
  let data1;
  await axios
    .get("https://jsonplaceholder.typicode.com/users/1/todos")
    .then(function (response) {
      data1 = response.data;
    });
  return data1;
};

export default function Todos() {
  let { isLoading, error, data } = useQuery(["todoData"], GetData);
  const [todos, settodos] = useState([]);
  useEffect(() => {
    console.log("in UseEffect");
    let arr = JSON.parse(localStorage.getItem("todos"));
    if (arr !== null) {
      console.log("inUseEffect");
      let newArr = data && !data?.isCompleted && [...data, ...arr];
      settodos(newArr);
    } else {
      settodos(data);
    }
  }, [data]);

  if (isLoading) return <h3 style={{ textAlign: "center" }}>Loading...</h3>;

  if (error) return "An error has occurred: " + error.message;

  const deleteHandler = (dt) => {
    let filteredTodos = todos.filter((todo) => dt.id !== todo.id);

    settodos(filteredTodos);
  };

  const checkHandler = (d) => {
    if (d.completed === false || d.isCompleted === false) {
      d.isCompleted = true;
      d.completed = true;
      settodos([...todos, d]);
    } else if (d.isCompleted || d.completed) {
      d.isCompleted = false;
      d.completed = false;
      settodos([...todos, d]);
    }
  };

  return (
    <>
      <Navigator />
      <Container>
        <Row className="justify-content-start">
          {todos &&
            todos.map((dt) => {
              return (
                <Card body key={data.id} style={{ margin: "8px" }}>
                  <Card.Title
                    style={{
                      color: (dt?.isCompleted || dt.completed) && "red",
                    }}
                  >
                    {dt.title}
                  </Card.Title>
                  <div className="mb-3">

                    <Form.Check.Input
                      id={data.id}
                      type={"checkbox"}
                      isValid
                      onChange={() => checkHandler(dt)}
                      checked={dt.completed || dt.isCompleted}
                    />
                    <Form.Check.Label
                      style={{ marginLeft: "7px" }}
                    >{`Mark as done`}</Form.Check.Label>
                    <Form.Control.Feedback type="valid">
                      {dt.isCompleted ? "Completed!" : null}
                    </Form.Control.Feedback>
                    <Button
                      className="secondary"
                      style={{ margin: "8px" }}
                      onClick={() => {
                        deleteHandler(dt);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              );
            })}
        </Row>
      </Container>
    </>
  );
}
