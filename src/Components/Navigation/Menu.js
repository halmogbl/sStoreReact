import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import Loading from "../../Components/Loading";
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
        <div className="col-12">
          <ul>
            {categories.map(category => (
              <li>
                <NavLink to={`/category/${category.id}`} key={category.id}>
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
