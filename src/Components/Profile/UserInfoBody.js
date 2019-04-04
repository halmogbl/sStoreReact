import React, { Component } from "react";
import { connect } from "react-redux";

class UserInfoBody extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.profile.id}</td>
        <td>{this.props.profile.user.username}</td>
        <td>{this.props.profile.user.first_name}</td>
        <td>{this.props.profile.user.last_name}</td>
        <td>{this.props.profile.user.email}</td>
        <td>{this.props.profile.phone_number}</td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
    loading: state.profileReducer.loading
  };
};

export default connect(mapStateToProps)(UserInfoBody);
