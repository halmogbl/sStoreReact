import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading";
import * as actionCreators from "../../store/actions";

export class BrandsList extends Component {
  componentDidMount() {
    this.props.fetchBrands();
  }
  render() {
    const { brands } = this.props;
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div className="col-12">
          <ul>
            {brands.map(brand => (
              <li>
                <NavLink to={`/brand/list/${brand.id}`} key={brand.id}>
                  {brand.brand_name}
                </NavLink>
              </li>
            ))}
          </ul>
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
  fetchBrands: () => dispatch(actionCreators.fetchBrands())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandsList);
