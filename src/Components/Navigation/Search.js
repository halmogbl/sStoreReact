import React, { Component } from "react";
import { connect } from "react-redux";
class Search extends Component {
  render() {
    return (
      <input
        style={{}}
        type="Search"
        className="form-control"
        id="search"
        placeholder="Search"
      />
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(null)(Search);
