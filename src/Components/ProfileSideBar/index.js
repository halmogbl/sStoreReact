import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import UpdateProfileForm from "../Profile/UpdateProfileForm";
import UpdateAddress from "../Profile/UpdateAddress";
import CreateAddress from "../Profile/CreateAddress";
import Profile from "../Profile";
import OrderHistory from "../Profile/orderHistoyList";
import Welcome from "./Welcome";

class ProfileSideBar extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <Sidebar />

        <div className="col-9">
          <Switch>
            <Route path="/profile/update" component={UpdateProfileForm} />
            <Route
              path="/profile/address/:addressID/update"
              component={UpdateAddress}
            />
            <Route path="/profile/order_history" component={OrderHistory} />
            <Route path="/profile/address/create/" component={CreateAddress} />
            <Route path="/profile/home" component={Profile} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null)(ProfileSideBar));
