import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Loading from "../../Components/Loading";
import * as actionCreators from "../../store/actions";
import { NavLink } from "react-router-dom";
import itemImage from "../../assets/images/notfound.png";
class CategoryItems extends Component {
  render() {
    const categoryID = this.props.match.params.categoryID;
    let category = this.props.categories.find(
      category => category.id === parseInt(categoryID)
    );
    if (this.props.loading) {
      return <Loading />;
    } else {
      let items = category.items.map(item => (
        <div
          style={{
            border: "1px solid #dee2e6",
            background: "#fff",
            margin: 10,
            padding: 20,
            borderRadius: 20
          }}
          className="col-sm-12 col-md-6 col-lg-3 cardShadow"
        >
          <NavLink to={`/item/${item.id}`} key={item.id}>
            <img src={itemImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <span
                className="card-title col-12"
                style={{
                  color: "#000",
                  fontWeight: 200,
                  textAlign: "center",
                  fontSize: 20
                }}
              >
                {item.name}
              </span>
              {/* <span
                className="card-title col-7"
                style={{ color: "#000", fontWeight: 200, textAlign: "right" }}
              >
                {item.items[0].price}{" "}
                <span style={{ color: "#28a745" }}>SAR</span>
              </span> */}
              {/* <span
                className="card-title col-7"
                style={{ color: "#000", fontWeight: 200, textAlign: "right" }}
              >
                {item.brand.image} <span style={{ color: "#28a745" }}>SAR</span>
              </span> */}
            </div>
          </NavLink>
        </div>
      ));
      return <div className="col-12">{items}</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    categories: state.categoriesReducer.categories,
    loading: state.categoriesReducer.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(CategoryItems);
