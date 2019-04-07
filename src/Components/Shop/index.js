import React, { Component } from "react";
import { connect } from "react-redux";
import BrandsList from "../Brands";
import Variatons from "../Variatons";
import * as actionCreators from "../../store/actions";

class Shop extends Component {
  componentDidMount() {
    if (this.props.categories) {
      this.props.categoriesItems(this.props.categories);
    }
  }
  componentDidUpdate() {
    if (this.props.categories) {
      this.props.categoriesItems(this.props.categories);
    }
  }
  handleSubmit = () => {
    let applyFilter = {
      size: this.props.size,
      color: this.props.color,
      brand: this.props.brand,
      priceFrom: this.props.priceFrom,
      priceTo: this.props.priceTo
    };
    alert(applyFilter);
    this.props.applyFilter(applyFilter);
  };

  render() {
    return (
      <div style={{ margin: 10 }}>
        <div
          className="col-3"
          style={{
            padding: 10,
            border: "1px solid gray",
            borderRadius: 10
          }}
        >
          <BrandsList />
          <Variatons />
          <button
            onClick={this.handleSubmit}
            className="col-12"
            class="btn btn-primary"
          >
            Filter
          </button>
        </div>
        <div className="col-9" style={{}}>
          shop
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories,
    brand: state.filterVariablesReducer.brand,
    color: state.filterVariablesReducer.color,
    size: state.filterVariablesReducer.size,
    priceFrom: state.filterVariablesReducer.priceFrom,
    priceTo: state.filterVariablesReducer.priceTo
  };
};

const mapDispatchToProps = dispatch => ({
  categoriesItems: items => dispatch(actionCreators.categoriesItems(items)),
  applyFilter: appliedFilter =>
    dispatch(actionCreators.applyFilter(appliedFilter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
