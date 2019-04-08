import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

//Components
import Home from "./Components/Home";
import NavBar from "./Components/Navigation";
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/RegistrationForm";
import Profile from "./Components/Profile";
import UpdateProfileForm from "./Components/Profile/UpdateProfileForm";
import CreateAddress from "./Components/Profile/CreateAddress";
import UpdateAddress from "./Components/Profile/UpdateAddress";

import CategoryItems from "./Components/CategoryItems";
import ItemDetail from "./Components/ItemDetail";

// Actions
import * as actionCreators from "./store/actions";

//CSS
import "./assets/css/GridSystem.css";
import "./assets/css/Custom.css";

import ProfileSideBar from "./Components/ProfileSideBar";

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProfile();
    this.props.fetchOrderes();
  }

  render() {
    return (
      <div className="content-wrapper col-12" style={{}}>
        <NavBar />
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/home" component={Home} />

          <Route path="/Profile" component={ProfileSideBar} />


          <Route path="/shop" component={Shop} />
          <Route path="/signup" component={Signup} />

          <Route path="/item/:itemID" component={ItemDetail} />
          <Route path="/category/:categoryID" component={CategoryItems} />

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
    fetchProfile: () => dispatch(actionCreators.fetchProfile()),
    fetchOrderes: () => dispatch(actionCreators.fetchOrderes())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
