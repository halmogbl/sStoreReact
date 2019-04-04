import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class UserInfoHeader extends Component {
  render() {
    return (
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone Number</th>
      </tr>
    );
  }
}

export default connect(mapStateToProps)(UserInfoHeader);
