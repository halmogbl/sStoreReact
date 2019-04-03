import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

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
      </tr>
    );
  }
}

export default connect(mapStateToProps)(AddressesHeader);
