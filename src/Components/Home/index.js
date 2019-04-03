import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="col-12">
        <h1> Home </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(null)(Home);
