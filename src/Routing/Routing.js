import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTodo from "../component/CreateTodo";
import Login from "../component/Login";
import Signup from "../component/Signup";
import Todos from "../Todos/Todos";
const Routing = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todos />} />
        <Route path="/createtodo" element={<CreateTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
