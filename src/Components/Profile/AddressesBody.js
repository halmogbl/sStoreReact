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
          <Link to={`/address/${this.props.address.id}/update`}>update</Link>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateAddress: (newAddress, history, addressID) =>
      dispatch(actionCreators.updateAddress(newAddress, history, addressID))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressesBody);
