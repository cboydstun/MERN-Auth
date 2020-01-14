import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Navbar from "../layout/Navbar";

import Header from "./Header.js"

function HeaderTest(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Navbar />;
  }
  return <Header />;
}

 export default HeaderTest; 