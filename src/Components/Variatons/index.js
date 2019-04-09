import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading";
import * as actionCreators from "../../store/actions";

export class Variatons extends Component {
  state = {
    color: "",
    priceFrom: "",
    priceTo: "",
    size: ""
  };

  async componentDidMount() {
    await this.props.fetchVariatons();
  }

  handleColorChange = event => {
    this.setState({
      color: event.target.value
    });
    this.props.getColor(event.target.value);
  };

  handleSizeChange = event => {
    this.setState({
      size: event.target.value
    });
    this.props.getSize(event.target.value);
  };
  handlePriceFromChange = event => {
    this.setState({
      priceFrom: event.target.value
    });
    this.props.getPriceFrom(event.target.value);
  };

  handlePriceToChange = event => {
    this.setState({
      priceTo: event.target.value
    });
    this.props.getPriceTo(event.target.value);
  };

  getLastPrice = () => {
    let x = this.props.variatons.pop();
    let y = x.price;
    // console.log(y);
    return y;
  };
  intToFloat = (num, decPlaces) => {
    return num.toFixed(decPlaces);
  };

  render() {
    let { variatons } = this.props;

    const PriceOptions = variatons.map(variaton => (
      <option value={variaton.price}>{variaton.price}</option>
    ));
    const ColorOptions = variatons.map(variaton => (
      <option value={variaton.color}>{variaton.color}</option>
    ));
    const SizeOptions = variatons.map(variaton => (
      <option value={variaton.size}>{variaton.size}</option>
    ));
    const allPrices = variatons.map(variaton => variaton.price);

    let maxPrice = Math.max(parseFloat(allPrices));
    maxPrice = this.intToFloat(maxPrice, 2);

    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div className="col-12 form-check " style={{ padding: 10 }}>
          <label className="form-check-label" for="inlineFormCustomSelect">
            Color
          </label>
          <select
            name="color"
            class="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
            onChange={this.handleColorChange}
          >
            <option selected>Choose...</option>
            {ColorOptions}
          </select>

          <label class="form-check-label" for="inlineFormCustomSelect">
            Sizes
          </label>
          <select
            onChange={this.handleSizeChange}
            class="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
          >
            <option selected>Choose...</option>
            {SizeOptions}
          </select>

          <label className="form-check-label" for="inlineFormCustomSelect">
            From
          </label>
          <select
            onChange={this.handlePriceFromChange}
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
          >
            <option value="0" selected>
              0
            </option>
            {PriceOptions}
          </select>
          <label className="form-check-label" for="inlineFormCustomSelect">
            To
          </label>
          <select
            onChange={this.handlePriceToChange}
            className="custom-select mr-sm-2"
            id="inlineFormCustomSelect"
          >
            <option value={maxPrice} selected>
              Choose Max Price
            </option>
            {PriceOptions}
          </select>

          {/* <div className="col-12">
//           <ul>
//             {variatons.map(variaton => (
//               <Link to={`/variaton/list/${variaton.id}`} key={variaton.id}>
//                 <li>{variaton.variaton_color}</li>
//               </Link>
//             ))}
//           </ul>
//           <ul>
//             {variatons.map(variaton => (
//               <Link to={`/variaton/list/${variaton.id}`} key={variaton.id}>
//                 <li>{variaton.variaton_size}</li>
//               </Link>
//             ))}
//           </ul>
//           <ul>
//             {variatons.map(variaton => (
//               <Link to={`/variaton/list/${variaton.id}`} key={variaton.id}>
//                 <li>{variaton.variaton_price}</li>
//               </Link>
//             ))}
//           </ul>
*/}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  variatons: state.variatonsReducer.variatons,
  loading: state.variatonsReducer.loading
});

const mapDispatchToProps = dispatch => ({
  fetchVariatons: () => dispatch(actionCreators.fetchVariatons()),
  getColor: color => dispatch(actionCreators.getColor(color)),
  getSize: size => dispatch(actionCreators.getSize(size)),
  getPriceFrom: brand => dispatch(actionCreators.getPriceFrom(brand)),
  getPriceTo: price => dispatch(actionCreators.getPriceTo(price))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Variatons);
