import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";
import * as navStyle from "./categoryStyle";
import Search from "./Search";

class NavList extends Component {
  render() {
    return (
      <div
        className="col-12"
        style={{
          background: "#343f48",
          color: "#fff",
          //position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: 10
        }}
      >
        <div
          className="col-lg-1 col-md-3 col-sm-4"
          style={{ textAlign: "center", padding: 6 }}
        >
          <NavLink style={{ color: "#fff" }} className="" to={`/home`}>
            Home
          </NavLink>
        </div>
        <div className="col-lg-8 col-md-5 col-sm-4">
          <Search />
        </div>
        <div className=" col-lg-3 col-md-4 col-sm-4 ">
          <div className=" col-lg-9 col-md-9 col-sm-9">
            {!this.props.user ? (
              <>
                <div
                  className="col-6"
                  style={{ textAlign: "center", padding: 5 }}
                >
                  <NavLink style={{ color: "#fff" }} className="" to={`/login`}>
                    Login
                  </NavLink>
                </div>
                <div
                  className="col-6"
                  style={{ textAlign: "center", padding: 5 }}
                >
                  <NavLink
                    style={{ color: "#fff" }}
                    className=""
                    to={`/signup`}
                  >
                    Signup
                  </NavLink>
                </div>
              </>
            ) : (
              <>
                <div
                  className="col-6"
                  style={{ textAlign: "center", padding: 5 }}
                >
                  <NavLink
                    style={{ color: "#fff" }}
                    className=""
                    to={`/profile`}
                  >
                    Profile
                  </NavLink>
                </div>
                <div
                  className="col-6"
                  style={{ textAlign: "center", padding: 5 }}
                >
                  <a
                    onClick={() => this.props.logout(this.props.history)}
                    className=""
                    style={{}}
                  >
                    logout
                  </a>
                </div>
              </>
            )}
          </div>
          <div
            className="col-4 col-lg-3 col-md-3 col-sm-3"
            style={{ textAlign: "center", padding: 5 }}
          >
            <span style={{ fontSize: 20 }}>
              <i style={{ margin: 2 }} className="fas fa-shopping-cart" />0
            </span>
          </div>
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
