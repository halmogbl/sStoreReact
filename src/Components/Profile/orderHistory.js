import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading";
import OrderHistoryItem from "./orderHistoryItem";
import * as actionCreators from "../../store/actions";

class OrderHistory extends Component {
  componentDidMount() {
    //this.props.fetchOrderes();
  }
  render() {
    const { OrderHistory } = this.props;
    const { user } = this.props.user;
    let orderHistory = [];
        if (OrderHistory.order_Items.length)
        orderHistory =  OrderHistory.order_Items.map(orderitem => (
        <OrderHistoryItem OrderItem={orderitem} key={orderitem.id} />
      ));
      return (
        <div>
          <div className="col-12">
            <div className="col-6">
              {`total : ${OrderHistory && OrderHistory.total}`}
            </div>
            <div className="col-6">
              {`user : ${OrderHistory && OrderHistory.profile.user.username}`}
            </div>
          </div>
          <div className="col-9">
            Your order :
          </div>
          <div className="col-3">
            {`status : ${OrderHistory && OrderHistory.status}`}
          </div>
          <div className="col-12">
            {orderHistory}
          </div>
        </div>
      );
  }
}
const mapStateToProps = state => {
  return {
    orderesReducer: state.orderesReducer,
    loading: state.orderesReducer.loading,
    user: state.auth,
  };
};
export default connect(mapStateToProps)(OrderHistory);
