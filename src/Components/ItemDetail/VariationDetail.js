import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";
import imageNotFound from "../../assets/images/notfound.png";

class VariationDetail extends Component {
  state = {};

  //   onVaraiteChange = id => {
  //     this.props.setVaraition(id);
  //   };
  //   IncrementItem = () => {
  //     this.setState(prevState => {
  //       if (prevState.quantity < 9) {
  //         return {
  //           quantity: prevState.quantity + 1
  //         };
  //       } else {
  //         return null;
  //       }
  //     });
  //   };
  //   DecreaseItem = () => {
  //     this.setState(prevState => {
  //       if (prevState.quantity > 1) {
  //         return {
  //           quantity: prevState.quantity - 1
  //         };
  //       } else {
  //         return null;
  //       }
  //     });
  //   };

  componentDidMount() {
    this.props.fetchVariatons();
  }

  render() {
    const varaiteID = this.props.match.params.varaiteID;
    // const varaite = this.props.varaite;
    console.log("from Qcode", this.props.variatons);

    let variatonsList = this.props.variatons.map(
      varaite =>
        varaite.id === +varaiteID && (
          <div
            className="form-check"
            style={{
              padding: 20
            }}
          >
            {/* <input
              className="form-check-input"
              type="radio"
              name="varaition"
              id={`Radios-${varaite.id}`}
              value={`option-${varaite.id}`}
              onChange={() => this.onVaraiteChange(varaite.id)}
            /> */}
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
                    <li className="list-group-item" style={{ width: "50%" }}>
                      Size:
                    </li>
                    <li className="list-group-item " style={{ width: "50%" }}>
                      {varaite.size}
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item" style={{ width: "50%" }}>
                      Color
                    </li>
                    <li className="list-group-item" style={{ width: "50%" }}>
                      {varaite.color}
                    </li>
                  </ul>
                </li>
                <li className="list-group-item col-6">
                  <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item" style={{ width: "100%" }}>
                      Price
                    </li>
                  </ul>
                  <ul className="list-group list-group-horizontal-sm col-12">
                    <li
                      className="list-group-item "
                      style={{ width: "100%", fontWeight: 400 }}
                    >
                      {varaite.price}{" "}
                      <span
                        className="text-success"
                        style={{ fontWeight: 800 }}
                      >
                        SAR
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="col-9">hiQcode</div>
            </div>
            {/* <div className="col-12 animated fadeInRight">
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
              </div> */}
          </div>
        )
    );
    if (!this.props.variatons) {
      return <div className="col-12">There is no variation</div>;
    } else {
      return (
        <div style={{ padding: 20 }}>
          <div className="col-12" style={{ background: "#fff" }}>
            {variatonsList}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    variatons: state.variatonsReducer.variatons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVariatons: () => dispatch(actionCreators.fetchVariatons())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VariationDetail);
