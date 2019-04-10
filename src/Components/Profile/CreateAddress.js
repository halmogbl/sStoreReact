import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../../store/actions";

class CreateAddress extends Component {
  state = {
    name: "",
    street_1: "",
    street_2: "",
    city: "",
    postal_code: "",
    alertUpload: true
  };

  submitAddress = async event => {
    event.preventDefault();
    this.props.postAddress(this.state, this.props.history);
  };

  onTextchange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div className="col-12" style={{ paddingTop: 20 }}>
        <form
          className="col-12"
          style={{ background: "#fff", padding: 20 }}
          role="form"
          onSubmit={this.submitAddress}
        >
          <h1>Create Address</h1>

          <div className="col-12">
            {/* <!-- left column --> */}

            {/* <!-- edit form column --> */}
            <div className="col-md-12 personal-info">
              {this.state.alertUpload ? (
                <div className="alert alert-info alert-dismissable">
                  <a className="panel-close close" data-dismiss="alert">
                    ×
                  </a>
                  <i className="fa fa-coffee" />
                  all fields with <strong> * </strong> are required
                </div>
              ) : (
                <></>
              )}
              <h3>Add new address</h3>

              <div className="form-group">
                <label className="col-lg-3 control-label">
                  * Address Name:
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onTextchange}
                    placeholder={"Ex: Home , Worke , Friends'House"}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">* Street 1:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="street_1"
                    value={this.state.street_1}
                    onChange={this.onTextchange}
                    placeholder={"Ex: 1234 King Abdullah St."}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Street 2:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="street_2"
                    value={this.state.street_2}
                    onChange={this.onTextchange}
                    placeholder={"Ex: Apt#5 , House#5"}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">* City:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.onTextchange}
                    placeholder={"Ex: Jubail, Riyadh, Jeddah"}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">* Postal code:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="postal_code"
                    value={this.state.postal_code}
                    onChange={this.onTextchange}
                    placeholder={"Ex: 35412, 15419, 35427"}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-8">
                  <button className="btn btn-primary" type="submit">
                    Save My Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    profile: state.profileReducer.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postAddress: (newAddress, history) =>
      dispatch(actionCreators.postAddress(newAddress, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAddress);
