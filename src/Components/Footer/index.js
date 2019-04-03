import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <div className="col-12">
        <footer> Footer </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(null)(Footer);
