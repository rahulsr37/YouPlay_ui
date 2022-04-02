import React from 'react'
import {Form, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <Form className="container mt-4 d-flex flex-column gap-3 border p-4 rounded rounded-3" style={{maxWidth : "30rem", boxShadow: "0px 0px 8px gray"}}>
        <h3 className='mx-auto'>Register</h3>

        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
          />
        </Form.Group>

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
          Already registered?
          <Link to="/login" className='ms-2'>
          Login
          </Link>
        </p>
      </Form>
    </>
  )
}

export default Register