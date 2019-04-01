import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Welcome from "./components/Welcome";

import { connect } from "react-redux";

// Actions
import * as actionCreators from "./store/actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="content-wrapper col-12">
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Redirect to="/welcome" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories,
    loading: state.categoriesReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(actionCreators.fetchCategories())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
