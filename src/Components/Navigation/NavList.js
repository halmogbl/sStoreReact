import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavList extends Component {
  render() {
    return (
      <>
        <NavLink to={`/home`}> Home /</NavLink>
        <NavLink to={`/profile`}> Profile /</NavLink>
        <NavLink to={`/shop`}> Shop /</NavLink>
        <NavLink to={`/login`}> Login /</NavLink>
        <NavLink to={`/signup`}> Signup </NavLink>
      </>
    );
  }
}

export default NavList;
