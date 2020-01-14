import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row, Col} from 'react-bootstrap'

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed" id="container" >
        <nav id="navBar">
          <div className="nav-wrapper">
            <Col>
            <Row>
            <Link
              to="/"
              className="s5 center black-text"
              id="navBarLink"
              color="white"
            >
              CHRIS BOYDSTUN: Full Stack Developer
            </Link>
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
            </Row>
            </Col>
          </div>

        </nav>
        
      </div>
    );
  }
}

export default Navbar;
