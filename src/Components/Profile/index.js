import React, { Component } from "react";
import { connect } from "react-redux";
import Addresses from "./Addresses";
import * as actionCreators from "../../store/actions";

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
        <Addresses address={address} key={address.id} />
      ));
      return (
        <div className="col-12">
          <h1>Profile</h1>
          <div>id:{this.props.profile.id}</div>
          <div>username: {this.props.profile.user.username}</div>
          <div>first name: {this.props.profile.user.first_name}</div>
          <div>last name: {this.props.profile.user.last_name}</div>
          <div>email: {this.props.profile.user.email}</div>
          <div>phone number: {this.props.profile.phone_number}</div>
          <div>image : {this.props.profile.profile_image}</div>
          <div className="col-12 my-3 border border-primary border-top  ">
            Addresses:{" "}
            <table
              className="col-12 table border "
              style={{ textAlign: "center" }}
            >
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>street 1</th>
                  <th>street 2</th>
                  <th>city</th>
                  <th>postal code</th>
                </tr>
              </thead>
              <tbody>{addresses}</tbody>
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
