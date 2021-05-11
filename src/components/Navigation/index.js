import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectToken, selectIsArtist } from "../../store/user/selectors"
import NavbarItem from "./NavbarItem"
import LoggedIn from "./LoggedIn"
import LoggedOut from "./LoggedOut"

export default function Navigation() {
  const token = useSelector(selectToken)

  //artist === true implicitly means logged in
  const artist = useSelector(selectIsArtist)

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        ► Task manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Tasks" />
          {artist ? <NavbarItem path="/auction" linkText="Add a task" /> : ""}
          {/* <NavbarItem path="/other" linkText="House rules" /> */}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
