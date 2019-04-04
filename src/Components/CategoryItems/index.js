import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Loading from "../../Components/Loading";
import * as actionCreators from "../../store/actions";
import { NavLink } from "react-router-dom";

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
        <li>
          <NavLink detail={item.detail} to={`/item/${item.id}`} key={item.id}>
            {item.item_name}
          </NavLink>
        </li>
      ));
      return (
        <div className="col-12">
          <ul>{items}</ul>
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

export default connect(
  mapStateToProps,
  null
)(CategoryItems);
