import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading";
import * as actionCreators from "../../store/actions";

export class BrandsList extends Component {
  state = {
    brand: ""
  };
  componentDidMount() {
    this.props.fetchBrands();
  }

  onBrandChange = event => {
    this.setState({
      brand: event.target.value
    });
    this.props.getBrand(event.target.value);
  };
  render() {
    const { brands } = this.props;
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div>
          <div className="form-check col-12" style={{ paddingLeft: 30 }}>
            {brands.map(brand => (
              <label className="form-check-label col-12">
                <input
                  className="form-check-input col-10"
                  type="radio"
                  id="exampleRadios1"
                  value={brand.name}
                  checked={this.state.brand === brand.name}
                  onChange={this.onBrandChange}
                />
                <span className="col-10"> {brand.name}</span>
              </label>

              //               <li>
              //                 <Link to={`/brand/list/${brand.id}`} key={brand.id}>
              //                   {brand.name}
              //                 </Link>
              //               </li>
            ))}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  brands: state.brandsReducer.brands,
  loading: state.brandsReducer.loading
});

const mapDispatchToProps = dispatch => ({
  fetchBrands: () => dispatch(actionCreators.fetchBrands()),
  getBrand: brand => dispatch(actionCreators.getBrand(brand))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandsList);
