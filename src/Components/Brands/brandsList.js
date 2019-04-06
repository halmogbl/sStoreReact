import React, { Component } from "react";
import { connect } from "react-redux";
// import * as actionCreators from "../../store/actions";

class Brands extends Component {
  render() {
    return <li />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  //   fetchBrands: () => dispatch(actionCreators.fetchBrands())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Brands);
