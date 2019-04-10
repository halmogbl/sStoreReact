import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

class Sidebar extends Component {
  render() {
    return (
      <div
        id="sidebar"
        className="col-3"
        style={{ marginTop: 20, background: "#fff", padding: 20 }}
      >
        <section>
          <div
            className="col-12"
            style={{
              padding: 5,
              borderBottom: "1px solid #e7e7e7"
            }}
          >
            <NavLink
              exact
              activeClassName="menu-item active "
              to="/profile/home"
            >
              Profile Page
            </NavLink>
          </div>
          <div
            className="col-12"
            style={{
              padding: 5,
              borderBottom: "1px solid #e7e7e7"
            }}
          >
            <NavLink
              exact
              activeClassName="menu-item active"
              to="/profile/address/create/"
              className="hover"
            >
              Create Address
            </NavLink>
          </div>
          <div
            className="col-12"
            style={{
              padding: 5,
              borderBottom: "1px solid #e7e7e7"
            }}
          >
            <NavLink
              exact
              activeClassName="menu-item active"
              to="/profile/update/"
            >
              Profile Update
            </NavLink>
          </div>
          <div
            className="col-12"
            style={{
              padding: 5,
              borderBottom: "1px solid #e7e7e7"
            }}
          >
            <NavLink
              exact
              activeClassName="menu-item active"
              to="/profile/order_history"
            >
              Order History
            </NavLink>
          </div>
        </section>
      </div>
    );
  }
}

export default Sidebar;
