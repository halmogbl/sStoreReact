import React, { Component } from "react";
import { connect } from "react-redux";

class Navigation extends Component {
  render() {
    return (
      <div className="col-12">
        <nav>nav</nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(null)(Navigation);
