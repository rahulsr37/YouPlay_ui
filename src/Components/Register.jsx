import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../config/firebase'

const Register = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      const userCredentials = await createUserWithEmailAndPassword(
        auth, email, password
      );
      await updateProfile(auth.currentUser, {displayName: name })
      navigate.push('/');
    }catch(error){
      alert(error.code);
    }
  }


  return (
    <>
    <Form onSubmit={handleLogin} className="container mt-4 d-flex flex-column gap-3 border p-4 rounded rounded-3" style={{maxWidth : "30rem", boxShadow: "0px 0px 8px gray"}}>
        <h3 className='mx-auto'>Register</h3>

        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={name}
            onChange = {(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group>
        <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange = {(e) => setPassword(e.target.value)}
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

export default Register;