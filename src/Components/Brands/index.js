import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import brandsList from "./brandsList";

class Brands extends Component {
  componentDidMount() {
    let test = this.props.fetchBrands();
    console.log("brands", test);
  }
  render() {
    return <div className="col-12">{<brandsList />}</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  fetchBrands: () => dispatch(actionCreators.fetchBrands())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Brands);
