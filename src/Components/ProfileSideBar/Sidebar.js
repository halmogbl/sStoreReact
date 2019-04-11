import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

class Sidebar extends Component {
  render() {
    return (
      <div
        id="sidebar"
        className="col-3"
        style={{
          marginTop: 20,
          background: "#fff",
          padding: 20,
          borderRadius: 20
        }}
      >
        <section>
          <NavLink
            exact
            activeClassName="menu-item active "
            to="/profile/home"
            style={{ textDecoration: "none" }}
          >
            <div
              className="col-12 hoverProfile"
              style={{
                padding: 5,
                borderBottom: "1px solid #e7e7e7"
              }}
            >
              Profile Page
            </div>
          </NavLink>
          <NavLink
            exact
            activeClassName="menu-item active"
            to="/profile/address/create/"
            className="hover"
            style={{ textDecoration: "none" }}
          >
            <div
              className="col-12 hoverProfile"
              style={{
                padding: 5,
                borderBottom: "1px solid #e7e7e7"
              }}
            >
              Create Address
            </div>
          </NavLink>
          <NavLink
            exact
            activeClassName="menu-item active"
            to="/profile/update/"
            style={{ textDecoration: "none" }}
          >
            <div
              className="col-12 hoverProfile"
              style={{
                padding: 5,
                borderBottom: "1px solid #e7e7e7"
              }}
            >
              Profile Update
            </div>
          </NavLink>
          <NavLink
            exact
            activeClassName="menu-item active"
            to="/profile/order_history"
            style={{ textDecoration: "none" }}
          >
            <div
              className="col-12 hoverProfile"
              style={{
                padding: 5,
                borderBottom: "1px solid #e7e7e7"
              }}
            >
              Order History
            </div>
          </NavLink>
        </section>
      </div>
    );
  }
}

export default Sidebar;
