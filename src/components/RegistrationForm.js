import React, { Component } from "react";

import { Input } from "react-input-component";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class RegistationForm extends Component {
  state = {
    username: "",
    // firstname: "",
    // lastname: "",
    password: ""
    // confirmpassword: "",
    // email: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.signup(this.state, this.props.history);
  };
  // HERE

  // handlePasswordInput = e => {
  //   if (this.state.confirmpassword) {
  //     this.props.passwordConfirm.isValid();
  //   }
  //   this.props.passwordConfirm.hideError();
  //   this.setState({
  //     password: e.target.value
  //   });
  // };

  // handleconfirmPassword = e => {
  //   this.setState({
  //     confirmpassword: e.target.value
  //   });
  // };

  // isConfirmedPassword = e => {
  //   return e === this.state.password;
  // };
  // handleEmailInput = e => {
  //   this.setState({
  //     email: e.target.value
  //   });
  // };

  // validateEmail = e => {
  //   let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(e);
  // };

  render() {
    return (
      <div className="create_account_screen">
        <div className="create_account_form">
          <h1>Create account</h1>
          <p>YOUR INFORMATION.</p>
          <form onSubmit={this.submitHandler}>
            <Input
              text="User Name"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
              emptyMessage="User Name can't be empty"
            />
            {/* <Input
              text="First Name"
              name="firstname"
              value={this.state.firstname}
              onChange={this.changeHandler}
              emptyMessage="First Name can't be empty"
            />

            <Input
              text="Last Name"
              name="lastname"
              value={this.state.lastname}
              onChange={this.changeHandler}
              emptyMessage="Last Name can't be empty"
            /> */}

            {/* <Input
              text="Email Address"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleEmailInput}
              errorMessage="Email is invalid"
              emptyMessage="Email can't be empty"
            /> */}

            <Input
              text="Password"
              type="password"
              name="password"
              // validator="true"
              // minCharacters="8"
              // requireCapitals="1"
              // requireNumbers="1"
              value={this.state.passsword}
              emptyMessage="Password is invalid"
              onChange={this.changeHandler}
            />

            <button type="submit" className="button button_wide">
              CREATE ACCOUNT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (userData, history) =>
      dispatch(actionCreators.signup(userData, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RegistationForm);
