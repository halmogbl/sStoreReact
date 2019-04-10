import React, { Component } from "react";
import { connect } from "react-redux";

class AddressesHeader extends Component {
  render() {
    return (
      <tr>
        <th>id</th>
        <th>name</th>
        <th>street 1</th>
        <th>street 2</th>
        <th>city</th>
        <th>postal code</th>
        <th>Actions</th>
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

export default connect(mapStateToProps)(AddressesHeader);
