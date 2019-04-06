import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="col-12">
          <img
            src="https://previews.123rf.com/images/arrow/arrow1508/arrow150800028/43966988-online-shopping-e-commerce-concept-background.jpg"
            alt=""
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Home);
