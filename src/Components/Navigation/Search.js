import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../../store/actions";
class Search extends Component {
  state = {
    flag: false
  };
  handleChange = event => {
    this.props.onSearch(event.target.value);
    this.setState({ query: event.target.value, flag: true });
  };
  hideSearch = () => {
    this.setState({ flag: false });
  };
  render() {
    console.log(this.props.searchfiltered);
    return (
      <>
        <input
          style={{}}
          type="Search"
          className="form-control"
          id="search"
          placeholder="Search"
          onChange={this.handleChange}
        />
        <dic>
          {this.props.searchfiltered.length > 0 &&
          this.state.query.length > 0 &&
          this.state.flag ? (
            <div
              className=" col-12 searchBar animated fadeInDown Shadow "
              style={{}}
            >
              {this.props.searchfiltered.map(item => (
                <Link
                  className="col-12"
                  to={`/item/${item.id}`}
                  key={item.id}
                  onClick={this.hideSearch}
                >
                  <div
                    className="hoverSearch col-12"
                    style={{ padding: 10, borderBottom: "1px solid #e7e7e7" }}
                  >
                    {" "}
                    {item.name}
                  </div>
                  {/* <div className="col-1">1</div> */}
                </Link>
              ))}
            </div>
          ) : (
            <div> </div>
          )}
        </dic>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredItems: state.filterVariablesReducer.filteredItems,
    searchfiltered: state.searchItems.searchfiltered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: query => dispatch(actionCreators.filterItems(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
