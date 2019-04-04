import React, { Component } from "react";

import { Input } from "react-input-component";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class RegistationForm extends Component {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    email: "",
    alertUsername: false,
    alertPassword: false
    // alertEmail: false
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async e => {
    e.preventDefault();
    if (
      this.state.password &&
      this.state.password === this.state.confirmpassword &&
      this.state.username
    ) {
      let userData = {
        username: this.state.username,
        password: this.state.password
        // email: this.state.email
      };
      await this.setState({
        alertPassword: false,
        alertUsername: false
        // alertEmail: false
      });
      this.props.signup(userData, this.props.history);
    } else {
      if (this.state.username) {
        this.setState({ alertUsername: false });
        if (this.state.password) {
          if (this.state.password !== this.state.confirmpassword) {
            this.setState({ alertPassword: true });
          }
          // if (this.state.email) {
          //   this.setState({ alertEmail: false });
          // } else {
          //   this.setState({ alertEmail: true });
          // }
        } else {
          this.setState({ alertPassword: true });
        }
      } else {
        this.setState({ alertUsername: true, alertPassword: false });
      }
    }
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
            {this.state.alertUsername ? (
              <div class="alert alert-danger" role="alert">
                Please input a username
              </div>
            ) : (
              <></>
            )}
            <Input
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
              className="form-control"
            />
            <Input
              placeholder="First Name"
              name="firstname"
              value={this.state.firstname}
              onChange={this.changeHandler}
              className="form-control"
            />

            <Input
              placeholder="Last Name"
              name="lastname"
              value={this.state.lastname}
              onChange={this.changeHandler}
              className="form-control"
            />

            {/* {this.state.alertEmail ? (
              <div class="alert alert-danger" role="alert">
                Please input an Email
              </div>
            ) : (
              <></>
            )} */}
            <Input
              placeholder="Email Address"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleEmailInput}
              className="form-control"
            />
            {this.state.alertPassword ? (
              <div class="alert alert-danger" role="alert">
                Passwords dont match or no password inputed
              </div>
            ) : (
              <></>
            )}
            <Input
              placeholder="Password"
              type="password"
              name="password"
              className="form-control"
              // validator="true"
              // minCharacters="8"
              // requireCapitals="1"
              // requireNumbers="1"
              value={this.state.passsword}
              onChange={this.changeHandler}
            />
            <Input
              placeholder="Confirm Password"
              type="password"
              name="confirmpassword"
              // validator="true"
              // minCharacters="8"
              // requireCapitals="1"
              // requireNumbers="1"
              className="form-control"
              value={this.state.confirmpasssword}
              onChange={this.changeHandler}
            />

            <button type="submit" className="button ">
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
