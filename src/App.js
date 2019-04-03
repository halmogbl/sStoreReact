import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// import Welcome from "./components/Welcome";
// import RegistrationForm from "./components/RegistrationForm";
// import Login from "./Components/Login/Login.js/index.js";

import { connect } from "react-redux";

//Components
import Home from "./Components/Home";
import NavBar from "./Components/Navigation";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import Shop from "./Components/Shop";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup";

// Actions
import * as actionCreators from "./store/actions";

//CSS
import "./assets/css/GridSystem.css";
import "./assets/css/Custom.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProfile();
  }

  render() {
    return (
      <div className="content-wrapper col-12">
        <NavBar />
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/shop" component={Shop} />
          {/* // <Route path="/login" component={Login} /> */}
          <Route path="/signup" component={Signup} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
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
    fetchCategories: () => dispatch(actionCreators.fetchCategories()),
    fetchProfile: () => dispatch(actionCreators.fetchProfile())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
