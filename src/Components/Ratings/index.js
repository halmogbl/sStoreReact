import React, { Component } from "react";
import Ratings from "react-ratings-declarative";

class Rating extends Component {
  changeRating = e => {
    this.setState({
      rating: null
    });
  };

  render() {
    return (
      <Ratings
        // rating={this.state.rating}
        changeRating={this.changeRating}
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
    );
  }
}
export default Rating;
