import React, { Component } from "react";
import { connect } from "react-redux";
import BrandsList from "../Brands";
import Variatons from "../Variatons";
class Shop extends Component {
  render() {
    return (
      <div className="col-12">
        <BrandsList />
        <Variatons />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(null)(Shop);
