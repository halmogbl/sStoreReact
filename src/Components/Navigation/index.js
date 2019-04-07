import React, { Component } from "react";
import { connect } from "react-redux";
import NavList from "./NavList";
import Menu from "./Menu";

class Navigation extends Component {
  render() {
    return (
      <div className="col-12">
        <NavList />
        <Menu />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(null)(Navigation);
