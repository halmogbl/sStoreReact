import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading";
import * as actionCreators from "../../store/actions";
import itemImage from "../../assets/images/notfound.png";

class OrderItem extends Component {
  state = {
    quantity: this.props.OrderItem.quantity
  };
  componentDidMount() {
    //this.props.fetchOrderes();
  }
  // onVaraiteChange = variaton => {
  //   this.props.setVaraitionCart(variaton,this.state.quantity)
  // };
  IncrementItem = async variaton => {
    await this.setState({ quantity: this.state.quantity + 1 });
    this.props.setVaraitionCart(variaton, this.state.quantity);
  };
  DecreaseItem = async variaton => {
    await this.setState({ quantity: this.state.quantity - 1 });
    this.props.setVaraitionCart(variaton, this.state.quantity);
  };
  render() {
    const { OrderItem } = this.props;
    const { user } = this.props.auth;
    return (
      <div
        className="col-12"
        style={{ border: "1px solid #e7e7e7", marginBottom: 20 }}
      >
        <div className="col-1" style={{ textAlign: "center", padding: 5 }}>
          {OrderItem.variaton.image ? (
            <img
              style={{ width: 40, height: 40, textAlign: "center" }}
              src={`${OrderItem.variaton.image}`}
            />
          ) : (
            <img
              style={{ width: 40, height: 40, textAlign: "center" }}
              src={itemImage}
            />
          )}
        </div>
        <div
          style={{
            border: "1px solid #e7e7e7",
            textAlign: "left",
            paddingLeft: 5
          }}
          className="col-10"
        >{`${OrderItem.variaton.item.name}`}</div>
        <div className="col-1">
          <button
            className="btn btn-danger col-12"
            style={{}}
            onClick={() =>
              this.props.deleteOrderItem(OrderItem.id, user.username)
            }
          >
            X
          </button>
        </div>
        <div
          style={{ border: "1px solid #e7e7e7", textAlign: "center" }}
          className="col-2"
        >{`price : ${OrderItem.variaton.price}`}</div>

        <div
          style={{ border: "1px solid #e7e7e7", textAlign: "center" }}
          className="col-3"
        >{`size : ${OrderItem.variaton.size}`}</div>
        <div
          style={{ border: "1px solid #e7e7e7", textAlign: "center" }}
          className="col-3"
        >{`color : ${OrderItem.variaton.color}`}</div>
        <div
          style={{ border: "1px solid #e7e7e7", textAlign: "center" }}
          className="col-3"
        >{` quantity : ${OrderItem.quantity}`}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    variaton: state.variatonsReducer.variaton,
    orderesReducer: state.orderesReducer,
    loading: state.orderesReducer.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // fetchCategories: () => dispatch(actionCreators.fetchCategories()),
    setVaraitionCart: (id, quantity) =>
      dispatch(actionCreators.setVaraitionCart(id, quantity)),
    deleteOrderItem: (orderItemId, username) =>
      dispatch(actionCreators.deleteOrderItem(orderItemId, username))
    // checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderItem);
