import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const isSuccess = localStorage.setItem("user", JSON.stringify(values));
      console.log(isSuccess);
      alert("user saved Successfully");
      navigate("/");
    },
    validate: (values) => {
      let error = {};
      const isEmail = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}.[a-zA-Z]{2,3}$/gm;
      const isPassword =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/gm;
      const isName = /^[a-zA-Z]{3,15}$/gm;
      if (values.email === "") {
        error.email = "required";
      } else if (!isEmail.test(values.email)) {
        error.email = "Invalid email format";
      }
      if (values.password === "") {
        error.password = "required";
      } else if (!isPassword.test(values.password)) {
        error.password = "Invalid password format";
      }
      if (values.username === "") {
        error.username = "required";
      } else if (!isName.test(values.username)) {
        error.username = "Invalid username";
      }
      return error;
    },
  });
  return (
    <Card body style={{ width: "20rem", margin: "20px auto" }}>
      <Form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={formik.handleChange}
            placeholder="Enter email"
            name={"email"}
            onBlur={formik.handleBlur}
            values={formik.values.email}
          />
          <Form.Text className="text-muted">
            {formik.errors.email && formik.touched.email ? (
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            ) : null}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            onChange={formik.handleChange}
            placeholder="Enter User name"
            name={"username"}
            onBlur={formik.handleBlur}
            values={formik.values.username}
          />
          <Form.Text className="text-muted">
            {formik.errors.username && formik.touched.username ? (
              <span style={{ color: "red" }}>{formik.errors.username}</span>
            ) : null}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={formik.handleChange}
            placeholder="Password"
            name={"password"}
            onBlur={formik.handleBlur}
            values={formik.values.password}
          />
          <Form.Text className="text-muted">
            {formik.errors.password && formik.touched.password ? (
              <span style={{ color: "red" }}>{formik.errors.password}</span>
            ) : null}
          </Form.Text>
        </Form.Group>
        <Form.Text className="text-muted">
          if you have already an account?<Link to="/">login</Link>
        </Form.Text>{" "}
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default Signup;
