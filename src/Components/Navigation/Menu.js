import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import Loading from "../../Components/Loading";
import * as categoryStyle from "./categoryStyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
library.add(faIgloo);

class Menu extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    const { categories } = this.props;
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div
          style={{ background: "#343f47", padding: 10 }}
          className="col-12 Shadow"
        >
          <NavLink
            className="col-lg-2 col-sm-6"
            to={`/home`}
            style={{
              textAlign: "center",
              color: "#adb5bd",
              textDecoration: "none"
            }}
          >
            Home
          </NavLink>
          <NavLink
            className="col-lg-2 col-sm-6"
            to={`/shop`}
            style={{
              textAlign: "center",
              color: "#adb5bd",
              textDecoration: "none"
            }}
          >
            Shop
          </NavLink>
          <button
            className="btn btn-default dropdown-toggle col-lg-2 col-sm-6"
            type="button"
            data-toggle="dropdown"
            data-hover="dropdown"
            style={{ color: "#fff" }}
          >
            Category <span class="caret" />
          </button>
          <ul
            className="col-lg-4 col-md-3 col-sm-2 dropdown-menu dropdown-menu-right ulcate"
            style={{
              height: 320,
              overflow: "scroll"
            }}
          >
            {categories.map(category => (
              <Link
                className="col-12 hoverCat"
                to={`/category/${category.id}`}
                key={category.id}
                style={{ border: "1px solid #e7e7e7" }}
              >
                <li style={{ padding: 10 }}>{category.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories,
    loading: state.categoriesReducer.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(actionCreators.fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
