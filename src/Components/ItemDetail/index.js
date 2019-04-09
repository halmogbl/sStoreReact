import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import Loading from "../Loading";
import imageNotFound from "../../assets/images/notfound.png";
import { Link } from "react-router-dom";
import RelatedItems from "./RelatedItem";
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
  state = {
    quantity: 1
  };
  IncrementItem = () => {
    this.setState(prevState => {
      if (prevState.quantity < 9) {
        return {
          quantity: prevState.quantity + 1
        };
      } else {
        return null;
      }
    });
  };
  DecreaseItem = () => {
    this.setState(prevState => {
      if (prevState.quantity > 1) {
        return {
          quantity: prevState.quantity - 1
        };
      } else {
        return null;
      }
    });
  };

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
    // console.log("show royrelf", this.props.categories);

    let MyCat = this.props.categories.find(
      cat => cat.items.find(itemOb => itemOb.id === item.id) && cat
    );

    let nextItems = this.props.brands.find(
      brand => brand.name && brand.name === item.brand.name && item.brand.name
    );

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
          <div className="col-9" style={{}}>
            <div className="col-12" style={{ background: "#fff", padding: 20 }}>
              <div className="col-9" style={{ padding: 10 }}>
                <h1 style={{ textAlign: "left" }}>{item.name}</h1>
                <ul class="list-group list-group-horizontal-xl">
                  <li class="list-group-item">Brand</li>
                  <li class="list-group-item">{item.brand.name}</li>
                </ul>
                <ul class="list-group list-group-horizontal-xl">
                  <li class="list-group-item">Description </li>
                  <li class="list-group-item">{item.description}</li>
                </ul>
                {/* {item.items.map(varaite => (
  
                ))} */}
              </div>
              <div className="col-12">
                {item.items.map(varaite => (
                  <div className="col-12">
                    <div className="col-3" style={{ padding: 20 }}>
                      {varaite.image ? (
                        <img style={{ width: "100%" }} src={varaite.image} />
                      ) : (
                        <img style={{ width: "100%" }} src={imageNotFound} />
                      )}
                    </div>
                    <div className="col-4">
                      <ul className="list-group list-group-horizontal-sm col-12">
                        <li className="list-group-item col-6">
                          <ul className="list-group list-group-horizontal-sm">
                            <li className="list-group-item">Size:</li>
                            <li className="list-group-item">{varaite.size}</li>
                          </ul>
                          <ul className="list-group list-group-horizontal-sm">
                            <li className="list-group-item">Color</li>
                            <li className="list-group-item">{varaite.color}</li>
                          </ul>
                        </li>
                        <li className="list-group-item col-6">
                          <ul className="list-group list-group-horizontal-sm">
                            <li className="list-group-item">Stock</li>
                            <li className="list-group-item">{varaite.stock}</li>
                          </ul>
                          <ul className="list-group list-group-horizontal-sm">
                            <li className="list-group-item">Price </li>
                            <li className="list-group-item">{varaite.price}</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="col-5">
                      <div className="col-6">
                        <button
                          className="btn btn-success m-1"
                          onClick={this.IncrementItem}
                        >
                          +
                        </button>
                        <input
                          style={{ width: "20%", textAlign: "center" }}
                          className="inputne m-1"
                          value={this.state.quantity}
                          onChange={this.handleChange}
                        />
                        <button
                          className="btn btn-danger m-1"
                          onClick={this.DecreaseItem}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-12">
                        <a
                          href="#"
                          className="btn btn-primary  m-1"
                          style={{
                            width: "60%",
                            background: "#40a9c3",
                            color: "#fff",
                            borderColor: "#40a9c3"
                          }}
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-3">{RelatedItemsO}</div>
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
