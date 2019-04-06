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
import Shop from "./Components/Shop";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/RegistrationForm";
import Profile from "./Components/Profile";
import UpdateProfileForm from "./Components/Profile/UpdateProfileForm";
import CreateAddress from "./Components/Profile/CreateAddress";
import UpdateAddress from "./Components/Profile/UpdateAddress";

// import Signup from "./Components/Signup";
import CategoryItems from "./Components/CategoryItems";
import ItemDetail from "./Components/ItemDetail";

// Actions
import * as actionCreators from "./store/actions";

//CSS
import "./assets/css/GridSystem.css";
import "./assets/css/Custom.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProfile();
    // this.props.checkForExpiredToken();
  }

  render() {
    return (
      <div className="content-wrapper col-12">
        <NavBar />
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/profile/update" component={UpdateProfileForm} />
          <Route path="/address/:addressID/update" component={UpdateAddress} />

          <Route path="/address/create/" component={CreateAddress} />
          <Route path="/profile" component={Profile} />
          <Route path="/shop" component={Shop} />
          {/* // <Route path="/login" component={Login} /> */}
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
    fetchProfile: () => dispatch(actionCreators.fetchProfile())
    // checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
