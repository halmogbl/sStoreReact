import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import RelatedItems from "./RelatedItem";
import Variation from "./Variation";

class ItemDetail extends Component {
  // componentDidMount() {}
  // componentDidUpdate() {
  // const orderID = this.props.orderes.find(
  //   order =>
  //     order.status === "NO_ORDER" &&
  //     this.props.profile.user.username === order.profile.user.username
  // );
  //   console.log("orderList", orderID);
  // }

  //   onSubmit = event => {
  //     event.preventDefault();
  //     this.props.createOrder(this.state);
  //   };

  async componentDidMount() {
    await this.props.fetchItemDetail(this.props.match.params.itemID);
    await this.props.fetchBrands();
  }
  componentDidUpdate() {
    if (this.props.item.id !== +this.props.match.params.itemID) {
      this.props.fetchItemDetail(this.props.match.params.itemID);
    }
  }
  render() {
    const itemID = this.props.match.params.itemID;
    const item = this.props.item;
    const loading = this.props.loading;
    console.log(
      "[ItemDetail.js] this.props.brands.length > 0",
      this.props.brands.length > 0
    );
    // console.log("show royrelf", this.props.categories);

    let MyCat = this.props.categories.find(
      cat => cat.items.find(itemOb => itemOb.id === item.id) && cat
    );

    let nextItems =
      !this.props.brands.length &&
      this.props.brands.find(brand => brand.name === item.brand.name); // THINK ABOUT THIS!!!!!!!!

    let RelatedItemsO =
      nextItems &&
      nextItems.brands
        .filter(itemOb => itemOb.id !== item.id)
        .map(nextItems => <RelatedItems item={nextItems} />);

    if (loading) {
      return (
        <div className="col-12">
          <Loading />
        </div>
      );
    } else {
      return (
        <>
          <nav aria-label="breadcrumb" className="col-12">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to={`/category/${MyCat && MyCat.id}`}>
                  {MyCat && MyCat.name}
                </Link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                {item.name}
              </li>
            </ol>
          </nav>
          <div style={{ padding: 20 }}>
            <div
              className="col-12 animated fadeIn"
              style={{ background: "#fff", borderRadius: 20 }}
            >
              <div className="col-8 " style={{}}>
                <div className="col-12" style={{ padding: 20 }}>
                  <div className="col-9" style={{ padding: 10 }}>
                    <h1 style={{ textAlign: "left" }}>{item.name}</h1>
                    <ul class="list-group list-group-horizontal-xl">
                      <li class="list-group-item">Brand</li>
                      <li class="list-group-item">
                        <img
                          style={{ width: 30, height: 30 }}
                          src={item.brand.image}
                          alt=".."
                        />
                      </li>
                    </ul>
                    <ul class="list-group list-group-horizontal-xl">
                      <li class="list-group-item">Description </li>
                      <li class="list-group-item">{item.description}</li>
                    </ul>
                    {/* {item.items.map(varaite => (
  
                ))} */}
                  </div>
                </div>
              </div>
              <div
                className="col-4"
                style={{ height: 350, overflow: "scroll" }}
              >
                {item.items.map(varaite => (
                  <Variation key={varaite.id} varaite={varaite} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-12" style={{ padding: 20, marginTop: 10 }}>
            <div
              className="col-12"
              style={{ padding: 20, background: "#fff", borderRadius: 20 }}
            >
              <h4>Related Items:</h4>
              <div className="col-12 animated fadeIn">{RelatedItemsO}</div>
            </div>
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    item: state.itemReducer.item,
    loading: state.itemReducer.loading,
    categories: state.categoriesReducer.categories,
    orderes: state.orderesReducer.orderes,
    profile: state.profileReducer.profile,
    brands: state.brandsReducer.brands
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItemDetail: id => dispatch(actionCreators.fetchItemDetail(id)),
    categoriesItems: () => dispatch(actionCreators.categoriesItems()),
    fetchBrands: () => dispatch(actionCreators.fetchBrands())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
