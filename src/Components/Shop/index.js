import React, { Component } from "react";
import { connect } from "react-redux";
import BrandsList from "../Brands";
import Variatons from "../Variatons";
import * as actionCreators from "../../store/actions";
import { NavLink } from "react-router-dom";
import itemImage from "../../assets/images/notfound.png";

class Shop extends Component {
  componentDidMount() {
    if (this.props.categories) {
      this.props.categoriesItems();
    }
  }
  componentDidUpdate() {
    if (this.props.categories) {
      this.props.categoriesItems();
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
    this.props.applyFilter(applyFilter);
  };

  render() {
    let items = this.props.filteredItems.map(item => (
      <div
        style={{
          border: "1px solid #dee2e6",
          background: "#fff",
          padding: 10,
          borderRadius: 20,
          margin: 10
        }}
        className="col-sm-12 col-md-6 col-lg-3 Shadow "
      >
        <NavLink to={`/item/${item.id}`} key={item.id}>
          {item.image ? (
            <img src={item.image} className="card-img-top" alt="..." />
          ) : (
            <img src={itemImage} className="card-img-top" alt="..." />
          )}{" "}
          <div className="card-body">
            <span
              className="card-title col-12"
              style={{
                color: "#000",
                fontWeight: 200,
                textAlign: "center",
                fontSize: 20
              }}
            >
              {item.name}
            </span>
            {/* <span
              className="card-title col-6"
              style={{ color: "#000", fontWeight: 200, textAlign: "right" }}
            >
              {item.items[0].price}{" "}
              <span style={{ color: "#28a745" }}>SAR</span>
            </span> */}
          </div>
        </NavLink>
      </div>
    ));
    return (
      <div style={{ margin: 10, padding: 10 }}>
        <div
          className="col-3"
          style={{
            padding: 10,
            border: "1px solid rgb(222, 226, 230)",
            borderRadius: 10,
            background: "#fff",
            marginTop: 10
          }}
        >
          <BrandsList />
          <Variatons />
          <button
            onClick={this.handleSubmit}
            className="col-12"
            className="btn"
            style={{ width: "100%", background: "#40a9c3", color: "#fff" }}
          >
            Filter
          </button>
        </div>
        <div className="col-9" style={{ padding: 20 }}>
          {items}
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
    priceTo: state.filterVariablesReducer.priceTo,
    filteredItems: state.filterVariablesReducer.filteredItems
  };
};

const mapDispatchToProps = dispatch => ({
  categoriesItems: () => dispatch(actionCreators.categoriesItems()),
  applyFilter: appliedFilter =>
    dispatch(actionCreators.applyFilter(appliedFilter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
