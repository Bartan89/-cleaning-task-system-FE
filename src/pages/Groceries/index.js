import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";


export default function Groceries() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



  return (
    <>
      <Jumbotron>
        <h1>Groceries:</h1>
      </Jumbotron>

    <Container>
      <Form as={Col} md={{ span: 8, offset: 2 }} className="mt-5">
        <h1 className="mt-5 mb-5">Add grocevires</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Grocery</Form.Label>
          <Form.Control
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            value={password}
            onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={() => null}>
            Log in
          </Button>
        </Form.Group>
        <Link to="/signup" style={{ textAlign: "center" }}>
          Click here to sign up
        </Link>
      </Form>
    </Container>
    </>
  )
}
