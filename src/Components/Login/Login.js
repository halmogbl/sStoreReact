import React, { Component } from "react";

import { Input } from "react-input-component";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (
      <div className="create_account_screen">
        <div className="create_account_form">
          <h3>Login</h3>
          <form onSubmit={this.submitHandler}>
            <Input
              text="User Name"
              name="username"
              value={this.state.username}
              className="form-control"
              onChange={this.changeHandler}
              //   emptyMessage="User Name can't be empty"
            />

            <Input
              text="Password"
              type="password"
              name="password"
              value={this.state.passsword}
              //   emptyMessage="Password is invalid"
              className="form-control"
              onChange={this.changeHandler}
            />

            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (userData, history) =>
      dispatch(actionCreators.login(userData, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
