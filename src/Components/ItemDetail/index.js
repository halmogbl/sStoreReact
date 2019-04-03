import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import Loading from "../Loading";
import imageNotFound from "../../assets/images/notfound.png";
class ItemDetail extends Component {
  componentDidMount() {
    this.props.fetchItemDetail(this.props.match.params.itemID);
  }
  render() {
    const itemID = this.props.match.params.itemID;
    const item = this.props.item;
    const loading = this.props.loading;

    console.log(item.item_image);

    if (loading) {
      return (
        <div className="col-12">
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="col-12">
          <h1>{item.item_name}</h1>
          {item.item_image ? (
            <img src={item.item_image} />
          ) : (
            <img src={imageNotFound} />
          )}

          <h4>{item.item_description}</h4>
          <h4>{item.item_brand.brand_name}</h4>
          <div>
            {item.variaton_items.map(varaite => (
              <h5>{varaite.variaton_price}</h5>
            ))}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    item: state.itemReducer.item,
    loading: state.itemReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItemDetail: id => dispatch(actionCreators.fetchItemDetail(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
