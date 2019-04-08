import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Welcome extends Component {
  render() {
    return (
      this.props.profile && (
        <div className="clo-12">
          <h1>Welcome {this.props.profile.user.username} </h1>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
    loading: state.profileReducer.loading
  };
};

export default connect(mapStateToProps)(Welcome);
