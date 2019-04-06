import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Loading from "../../Components/Loading";
import * as actionCreators from "../../store/actions";
import { NavLink } from "react-router-dom";
import itemImage from "../../assets/images/notfound.png";
class CategoryItems extends Component {
  render() {
    const categoryID = this.props.match.params.categoryID;
    let category = this.props.categories.find(
      category => category.id === parseInt(categoryID)
    );
    if (this.props.loading) {
      return <Loading />;
    } else {
      let items = category.items.map(item => (
        <div
          style={{ border: "1px solid black" }}
          className="col-sm-12 col-md-6 col-lg-3"
        >
          <NavLink to={`/item/${item.id}`} key={item.id}>
            <img src={itemImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.item_name}</h5>
            </div>
          </NavLink>
          <a href="#" className="btn btn-primary" style={{ width: "100%" }}>
            Add To Cart
          </a>
        </div>
      ));
      return <div className="col-12">{items}</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    categories: state.categoriesReducer.categories,
    loading: state.categoriesReducer.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(CategoryItems);
