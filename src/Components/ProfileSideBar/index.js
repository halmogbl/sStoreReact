import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import UpdateProfileForm from "../Profile/UpdateProfileForm";
import UpdateAddress from "../Profile/UpdateAddress";
import CreateAddress from "../Profile/CreateAddress";
import Profile from "../Profile";

class ProfileSideBar extends Component {
  render() {
    return (
      <div>
        <div className="col-9">
          <Switch>
            <Route path="/profile/update" component={UpdateProfileForm} />
            <Route
              path="/profile/address/:addressID/update"
              component={UpdateAddress}
            />

            <Route path="/profile/address/create/" component={CreateAddress} />
            <Route path="/profile/home" component={Profile} />
          </Switch>
        </div>
        <Sidebar />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default withRouter(connect(null)(ProfileSideBar));
