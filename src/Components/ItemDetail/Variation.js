import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";
import imageNotFound from "../../assets/images/notfound.png";

class Variation extends Component {
  state = {
    quantity: 1
  };

  onVaraiteChange = id => {
    this.props.setVaraition(id);
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

  componentDidMount() {}

  render() {
    const varaite = this.props.varaite;
    if (!varaite) {
      return <div className="col-12">There is no variation</div>;
    } else {
      return (
        <div className="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="varaition"
              id={`Radios-${varaite.id}`}
              value={`option-${varaite.id}`}
              onChange={() => this.onVaraiteChange(varaite.id)}
            />
            <label class="form-check-label" for="exampleRadios1">
              <div className="col-12">
                <div className="col-3" style={{}}>
                  {varaite.image ? (
                    <img style={{ width: "100%" }} src={varaite.image} />
                  ) : (
                    <img style={{ width: "100%" }} src={imageNotFound} />
                  )}
                </div>
                <ul className="list-group list-group-horizontal-sm col-9">
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

              {this.props.variaton === varaite.id && (
                <div className="col-12">
                  <div className="col-7">
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
                  <div className="col-4">
                    <a
                      href="#"
                      className="btn btn-primary  m-1"
                      style={{
                        width: "100%",
                        background: "#40a9c3",
                        color: "#fff",
                        borderColor: "#40a9c3"
                      }}
                    >
                      Add To Cart
                    </a>
                  </div>
                </div>
              )}
            </label>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    variaton: state.variatonsReducer.variaton
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVaraition: id => dispatch(actionCreators.setVaraition(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Variation);
