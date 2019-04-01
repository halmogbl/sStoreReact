import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>WELCOME</h1>

        <ReactPlayer
          url="https://www.youtube.com/watch?v=yAl48Tk0Sno"
          width=" 100%"
          height="1000px"
          playing
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(null)(Welcome);
