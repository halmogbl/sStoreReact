import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading";
import OrderItem from "./orderItem";
import * as actionCreators from "../../store/actions";
class Orderes extends Component {
  componentDidMount() {
    //this.props.fetchOrderes();
  }
  render() {
    const { orderes } = this.props.orderesReducer;
    const { user } = this.props.user;

    if (!user) {
      return (
        <div style={{ padding: 20 }} className="col-12">
          <div
            style={{ background: "#fff", padding: 20, borderRadius: 20 }}
            className="col-12"
          >
            you need to{" "}
            <Link to={`/login`}>
              {" "}
              <span style={{}}> Login</span>{" "}
            </Link>{" "}
            to see this page
          </div>
        </div>
      );
    } else {
      if (!orderes) {
        return <div>You dont have Cart Shop Now</div>;
      } else {
        let cartItem = [];
        if (orderes.order_Items.length)
          cartItem = orderes.order_Items.map(orderitem => (
            <OrderItem OrderItem={orderitem} key={orderitem.id} />
          ));
        return (
          <div>
            <div className="col-12">
              <div className="col-6">
                {`total : ${orderes && orderes.total}`}
              </div>
              <div className="col-6">
                {`user : ${orderes && orderes.profile.user.username}`}
              </div>
            </div>
            <div className="col-9">Your order :</div>
            <div className="col-3">
              <button
                onClick={() =>
                  this.props.checkoutOrder(orderes.id, user.username)
                }
              >
                CheckOut
              </button>
            </div>
            <div className="col-12">{cartItem}</div>
          </div>
        );
      }
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
const mapDispatchToProps = dispatch => {
  return {
    checkoutOrder: (orderesid, username) =>
      dispatch(actionCreators.checkoutOrder(orderesid, username))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orderes);
