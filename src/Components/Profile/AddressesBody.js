import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <td>
          <Link to={`/address/${this.props.address.id}/update`}>update</Link>
        </td>
      </tr>
    );
  }
}

export default AddressesBody;
