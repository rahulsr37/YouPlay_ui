import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  return (
    <>
      <Form className="container mt-5 d-flex flex-column gap-5 border p-4 rounded rounded-3" style={{maxWidth : "30rem", boxShadow: "0px 0px 8px gray"}}>
        <h3 className="mx-auto">Login</h3>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group>
        <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="btn-lg btn-block auth_btn">
          Submit
        </Button>
        <p className="forgot-password text-right">
          Not a user?
          <Link to="/register" className='ms-2'>
          Register
          </Link>
        </p>
      </Form>
    </>
  );
};

export default Login;
