import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

class Sidebar extends Component {
  render() {
    return (
      <div
        id="sidebar"
        className="col-3"
        style={{ marginTop: 20, background: "#fff" }}
      >
        <section>
          <h5>
            <NavLink
              exact
              activeClassName="menu-item active "
              to="/profile/home"
            >
              Profile Page
            </NavLink>
          </h5>
          <h5>
            <NavLink
              exact
              activeClassName="menu-item active"
              to="/profile/address/create/"
              className="hover"
              style={{
                padding: 5,
                border: "1px solid #e7e7e7",
                borderRadius: 10
              }}
            >
              Create Address
            </NavLink>
          </h5>
          <h5>
            <NavLink
              exact
              activeClassName="menu-item active"
              to="/profile/update/"
            >
              Profile Update
            </NavLink>
          </h5>
        </section>
      </div>
    );
  }
}

export default Sidebar;
