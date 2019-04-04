import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading";
import * as actionCreators from "../../store/actions";

export class Variatons extends Component {
  componentDidMount() {
    this.props.fetchVariatons();
  }
  render() {
    const { variatons } = this.props;
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div className="col-12">
          <ul>
            {variatons.map(variaton => (
              <NavLink to={`/variaton/list/${variaton.id}`} key={variaton.id}>
                <li>{variaton.variaton_color}</li>
              </NavLink>
            ))}
          </ul>
          <ul>
            {variatons.map(variaton => (
              <NavLink to={`/variaton/list/${variaton.id}`} key={variaton.id}>
                <li>{variaton.variaton_size}</li>
              </NavLink>
            ))}
          </ul>
          <ul>
            {variatons.map(variaton => (
              <NavLink to={`/variaton/list/${variaton.id}`} key={variaton.id}>
                <li>{variaton.variaton_price}</li>
              </NavLink>
            ))}
          </ul>
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
  fetchVariatons: () => dispatch(actionCreators.fetchVariatons())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Variatons);
