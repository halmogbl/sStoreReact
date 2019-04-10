import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading";
import * as actionCreators from "../../store/actions";

class OrderHistoryItem extends Component {
 
  componentDidMount() {
    //this.props.fetchOrderes();
  }
  // onVaraiteChange = variaton => {
  //   this.props.setVaraitionCart(variaton,this.state.quantity)
  // };
  
  render() {
    
    const { OrderItem } = this.props;
      return (
        <div>
          <div className="col-12">
            {`name of item : ${OrderItem.variaton.item.name}`}
          </div>
          <div className="col-3">
            {`color : ${OrderItem.variaton.color}`}
          </div>
          <div className="col-3">
            {`size : ${OrderItem.variaton.size}`}
          </div>
          <div className="col-3">
            {`price : ${OrderItem.variaton.price}`}
          </div>
          <div className="col-3">
            {` quantity : ${OrderItem.quantity}`}
          </div>
        </div>
      );
    
  }
}
const mapStateToProps = state => {
  return {
    variaton: state.variatonsReducer.variaton,
    orderesReducer: state.orderesReducer,
    loading: state.orderesReducer.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // fetchCategories: () => dispatch(actionCreators.fetchCategories()),
    setVaraitionCart: (id,quantity) => dispatch(actionCreators.setVaraitionCart(id,quantity))
    // checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(OrderHistoryItem);
