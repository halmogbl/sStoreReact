import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

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
          <Link
            className="btn btn-info"
            to={`/profile/address/${this.props.address.id}/update`}
          >
            Update
          </Link>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.deleteAddress(
                this.props.address,
                this.props.address.id
              );
            }}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteAddress: (address, addressID) =>
      dispatch(actionCreators.deleteAddress(address, addressID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddressesBody);
