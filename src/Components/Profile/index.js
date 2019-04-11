import React, { Component } from "react";
import { connect } from "react-redux";
import AddressesBody from "./AddressesBody";
import * as actionCreators from "../../store/actions";
import AddressesHeader from "./AddressesHeader";
import imageNotFound from "../../assets/images/notfound.png";
import UserInfoHeader from "./UserInfoHeader";
import UserInfoBody from "./UserInfoBody";
import UpdateProfileForm from "./UpdateProfileForm";
import { Link } from "react-router-dom";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile();
    console.log("fetching profile", this.props.profile);
  }

  render() {
    if (this.props.profile) {
      const addresses = this.props.profile.addresses.map(address => (
        <AddressesBody address={address} key={address.id} />
      ));

      return (
        <div className="col-12 " style={{ padding: 20 }}>
          <div
            className="col-12"
            style={{
              justifyContent: "center",
              alignItems: "center",
              background: "#fff",
              padding: 20,
              borderRadius: 20
            }}
          >
            {/* <div className="col-2">
              {this.props.profile.image ? (
                <img
                  className="col-12"
                  style={{
                    width: 120,
                    height: 120,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  src={this.props.profile.image}
                  alt={imageNotFound}
                />
              ) : (
                <img
                  style={{
                    width: 120,
                    height: 120,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  src={imageNotFound}
                  alt={imageNotFound}
                />
              )}
            </div> */}
            <div
              className=""
              style={{
                textAlign: "center",
                width: "-webkit-fill-available"
              }}
            >
              <UserInfoBody image={this.props.profile.image} />
            </div>

            <div
              className="col-12"
              style={{
                textAlign: "center",
                fontWeight: 500,
                fontSize: 25,
                padding: 10
              }}
            >
              Addresses
            </div>
            <table
              className="table table-striped "
              style={{ textAlign: "center", width: "-webkit-fill-available" }}
            >
              <thead>
                <AddressesHeader />
              </thead>
              <tbody className="">{addresses}</tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
    loading: state.profileReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return { fetchProfile: () => dispatch(actionCreators.fetchProfile()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
