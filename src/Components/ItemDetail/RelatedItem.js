import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";

class RelatedItem extends Component {
  componentDidMount() {}
  render() {
    const item = this.props.item;
    console.log("mumumum", item);
    if (!item) {
      return <div className="col-12">There is no related Items</div>;
    } else {
      return (
        <div className="list-group">
          <Link
            to={`/item/${item.id}`}
            className="list-group-item list-group-item-action"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{item.name}</h5>
              <small className="text-muted">..</small>
            </div>

            {item.items.map(varaite => (
              <>
                <p className="">
                  <span>Color:</span>
                  {varaite.color}
                </p>
                <p className="" style={{ color: "#28a745" }}>
                  {varaite.price}
                </p>
              </>
            ))}
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedItem);
