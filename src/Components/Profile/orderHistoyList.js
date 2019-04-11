import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading";
import OrderHistory from "./orderHistory";
import * as actionCreators from "../../store/actions";

class OrderHistoryLis extends Component {
  componentDidMount() {
    //this.props.fetchOrderes();
  }
  render() {
    const { orderHistory } = this.props.orderesReducer;
    const { user } = this.props.user;
    if (!orderHistory) {
      return <div>You dont have Order History Shop</div>;
    } else {
      let orderHistoryL = [];
      if (orderHistory.length)
        orderHistoryL = orderHistory.map(orderHistoryOb => (
          <OrderHistory OrderHistory={orderHistoryOb} key={orderHistoryOb.id} />
        ));
      return (
        <div style={{ padding: 20 }}>
          <div
            className="col-12"
            style={{
              background: "#fff",
              padding: 20,
              height: 620,
              overflow: "scroll",
              borderRadius: 20
            }}
          >
            {orderHistoryL}
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    orderesReducer: state.orderesReducer,
    loading: state.orderesReducer.loading,
    user: state.auth
  };
};
export default connect(mapStateToProps)(OrderHistoryLis);
