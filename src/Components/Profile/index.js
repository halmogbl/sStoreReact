import React, { Component } from "react";
import { connect } from "react-redux";
import AddressesBody from "./AddressesBody";
import * as actionCreators from "../../store/actions";
import AddressesHeader from "./AddressesHeader";
import imageNotFound from "../../assets/images/notfound.png";
import UserInfoHeader from "./UserInfoHeader";
import UserInfoBody from "./UserInfoBody";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile();
    console.log("fetching profile", this.props.profile);
  }
  state = {
    profile: {
      id: 1,
      user: {
        id: 1,
        username: "hamadalala",
        first_name: "hamad",
        last_name: "almogbl",
        email: "almohama7788@gmail.com"
      },
      phone_number: "3462283050",
      profile_image: null,
      addresses: [
        {
          id: 1,
          name: "the morgan",
          street_1: "2401 westridge st, Apt#3101",
          street_2: "2401 westridge st, Apt#3101",
          city: "Houston",
          postal_code: 77054
        },
        {
          id: 3,
          name: "the morgan",
          street_1: "2401 westridge st, Apt#3101",
          street_2: "2401 westridge st, Apt#3101",
          city: "Houston",
          postal_code: 77054
        },
        {
          id: 4,
          name: "the morgan",
          street_1: "2401 westridge st, Apt#3101",
          street_2: "2401 westridge st, Apt#3101",
          city: "Houston",
          postal_code: 77054
        }
      ]
    }
  };
  render() {
    if (this.props.profile) {
      const addresses = this.props.profile.addresses.map(address => (
        <AddressesBody address={address} key={address.id} />
      ));
      console.log(this.props.profile.profile_image);
      // let image = this.props.profile.profile_image;
      return (
        <div className="col-12">
          {/* card start */}
          <div className="card border-primary " style={{ width: "auto" }}>
            {this.props.profile.profile_image ? (
              <img
                className="card-img-top "
                src={this.props.profile.profile_image}
                alt={this.props.profile.profile_image}
              />
            ) : (
              <img src={imageNotFound} alt={imageNotFound} />
            )}
            <div className="card-body  ">
              <div className="col-12 my-3 border border-primary border-top  ">
                <h5 className="card-title">Profile</h5>
                <table
                  className="table border  "
                  style={{ textAlign: "center", width: "max-content" }}
                >
                  <thead>
                    <UserInfoHeader />
                  </thead>
                  <tbody>
                    <UserInfoBody />
                  </tbody>
                </table>
              </div>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          {/* end of card */}

          <div className="col-12 my-3 border border-primary border-top  ">
            <h5>Addresses</h5>
            <table
              className="table table-striped "
              style={{ textAlign: "center", width: "max-content" }}
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
