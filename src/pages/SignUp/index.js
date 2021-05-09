import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { signUp } from "../../store/user/actions"
import { selectToken } from "../../store/user/selectors"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Link } from "react-router-dom"
import { Col } from "react-bootstrap"

export default function SignUp() {
  const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //const [isArtist, setArtist] = useState(false)

  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const history = useHistory()

  useEffect(() => {
    if (token !== null) {
      history.push("/")
    }
  }, [token, history])

  function submitForm(event) {
    event.preventDefault()
    const email = name
    const isArtist = true

    const names = ['Bart', 'Camila','Camille', 'Andrej','Miguel']


    if(names.includes(name)){
      dispatch(signUp(name, email, password, isArtist))
    } else {
      setError('The person you are trying to add does not live here. (make sure to add uppercased letter for firstname)')
    }


    //setEmail("")
    setPassword("")
    setName("")
  }



  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <Form.Control value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter name" required />
        </Form.Group>
        {error}

        {/* <Form.Group controlId="formBasicEmail">
          <Form.Label>Are you a artist?</Form.Label>
          <Form.Control value={isArtist} onChange={(event) => setArtist(!isArtist)} type="checkbox" required />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group> */}

        {/* <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={name} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group> */}

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login">Click here to log in</Link>
      </Form>
    </Container>
  )
}
