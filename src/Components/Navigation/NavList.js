import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";
import * as navStyle from "./categoryStyle";

class NavList extends Component {
  render() {
    return (
      <div
        className="col-12"
        style={{
          background: "#2d2b33",
          color: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0
        }}
      >
        <div className="col-10" style={{ padding: 0 }}>
          <div>
            <ul
              className="navbar-nav "
              style={{ listStyle: "none", display: "-webkit-box" }}
            >
              <li className="nav-item" style={navStyle.navli}>
                <NavLink
                  style={{ color: "#fff" }}
                  className="nav-link"
                  to={`/home`}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item" style={navStyle.navli}>
                <NavLink
                  style={{ color: "#fff" }}
                  className="nav-link"
                  to={`/shop`}
                >
                  Shop
                </NavLink>
              </li>
              {!this.props.user ? (
                <>
                  <li className="nav-item" style={navStyle.navli}>
                    <NavLink
                      style={{ color: "#fff" }}
                      className="nav-link"
                      to={`/login`}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item" style={navStyle.navli}>
                    <NavLink
                      style={{ color: "#fff" }}
                      className="nav-link"
                      to={`/signup`}
                    >
                      Signup
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item" style={navStyle.navli}>
                    <NavLink
                      style={{ color: "#fff" }}
                      className="nav-link"
                      to={`/profile`}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item" style={navStyle.navli}>
                    <button
                      onClick={() => this.props.logout(this.props.history)}
                      className="btn btn-danger"
                    >
                      logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="col-2">
          <span style={{ fontSize: 20, float: "right" }}>
            <i style={{ margin: 2 }} className="fas fa-shopping-cart" />0
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => ({
  logout: history => dispatch(actionCreators.logout(history))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavList)
);
