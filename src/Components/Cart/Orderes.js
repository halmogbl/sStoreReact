import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading";
// import * as actionCreators from "../../store/actions";
class Orderes extends Component {
  componentDidMount() {
    //this.props.fetchOrderes();
  }
  render() {
    const { orderList } = this.props;
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div className="col-12">
          <ul>
            {orderList.map(order => (
              <li>
                <Link to={`/orderes/list/${order.id}`} key={order.id}>
                  {order.status}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    orderList: state.orderesReducer.orderes,
    loading: state.orderesReducer.loading
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     // fetchCategories: () => dispatch(actionCreators.fetchCategories()),
//     fetchOrderes: () => dispatch(actionCreators.fetchOrderes())
//     // checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
//   };
// };
export default connect(mapStateToProps)(Orderes);
