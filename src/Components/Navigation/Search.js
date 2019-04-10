import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
class Search extends Component {
  handleChange = event => {
    this.props.onSearch(event.target.value);
    this.setState({ query: event.target.value });
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

        {this.props.searchfiltered.length > 0 && this.state.query.length > 0 ? (
          <div className="searchBar" style={{}}>
            {this.props.searchfiltered.map(item => item.name)}
          </div>
        ) : (
          <div />
        )}
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
