import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
        <div style={{}} className="col-12">
          <ul
            className="col-12"
            style={{ listStyle: "none", display: "flex", overflowY: "scroll" }}
          >
            {categories.map(category => (
              <li>
                <NavLink
                  to={`/category/${category.id}`}
                  key={category.id}
                  style={categoryStyle.circleStyle}
                >
                  {category.category_name}
                </NavLink>
              </li>
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
