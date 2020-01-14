import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";

import "./Header.css";
const Header = props => {
  let [token, setToken] = useState(props.token);
  useEffect(() => {
    setToken(props.token);
  }, [props.token]);
  return (
    <div className="container-nav">
      <nav>
        <Link to={props.token ? "/landing" : "/login"}>Home</Link>
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/register">Sign Up</Link>}
        {token && <Link to="/users">Edit Users</Link>}
      </nav>

    </div>
    
  );
}
const mapStateToProps = state => {
  return {
    token: state.token,
  }
}
export default connect(mapStateToProps, {logoutUser})(Header);