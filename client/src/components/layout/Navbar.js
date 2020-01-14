import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

import "./Navbar.css";

class NavBar extends Component {
  render() {
    return (
      <div  >

          <Navbar id="navBar" expand="lg" sticky="top">
            <Navbar.Brand  href="/">Chris Boydstun: Full Stack Developer</Navbar.Brand>
            <Navbar.Toggle   aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Link
              to="/"
              className="col s5 center black-text"
              id="navBarLink"
            >
              HOME
            </Link>
            <Link
              to="/Skills"
              className="col s5 center black-text"
              id="navBarLink"

            >
              SKILLS
            </Link>
            <Link
              to="/Projects"
              className="col s5 center black-text"
              id="navBarLink"

            >
              PROJECTS
            </Link>
            <Link
              to="/register"
              className="col s5 center black-text"
              id="navBarLink"

            >
              REGISTER
            </Link>
            <Link
              to="/login"
              className="col s5 center black-text"
              id="navBarLink"

            >
              LOGIN
            </Link>
            </Navbar.Collapse>
          </Navbar>            
            </div>

    );
  }
}

export default NavBar;
