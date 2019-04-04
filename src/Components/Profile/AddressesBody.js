import React, { Component } from "react";
class AddressesBody extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.address.id}</td>
        <td>{this.props.address.name}</td>
        <td>{this.props.address.street_1}</td>
        <td>{this.props.address.street_2}</td>
        <td>{this.props.address.city}</td>
        <td>{this.props.address.postal_code}</td>
      </tr>
    );
  }
}

export default AddressesBody;
