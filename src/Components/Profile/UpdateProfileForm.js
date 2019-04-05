import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import imageNotFound from "../../assets/images/notfound.png";
import { Link } from "react-router-dom";

class UpdateProfileForm extends Component {
  componentDidMount() {
    this.setState({
      profile_image: this.props.profile.profile_image,
      phone_number: this.props.profile.phone_number
    });
  }

  componentDidUpdate(prevState) {
    if (prevState.profile !== this.props.profile) {
      this.setState({
        profile_image: this.props.profile.profile_image,
        phone_number: this.props.profile.phone_number
      });
    }
  }
  state = {
    phone_number: "",
    profile_image: null
  };

  submitChannel = event => {
    event.preventDefault();
    this.props.putProfile(this.state, this.resetForm, this.props.history);
  };

  resetForm = () => this.setState({ phone_number: "", profile_image: "" });

  onTextchange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onImageChange = () => {
    let filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      let fileToLoad = filesSelected[0];
      this.setState({ profile_image: fileToLoad });
      var fileReader = new FileReader();

      fileReader.readAsDataURL(fileToLoad);
    }
  };

  render() {
    console.log(this.props.user);
    console.log("from props", this.props.profile.profile_image);
    console.log(
      "from the state",
      this.state.profile_image,
      "Phone Number from State",
      this.state.phone_number
    );

    return (
      <div className="container">
        <form
          className="form-horizontal"
          role="form"
          onSubmit={this.submitChannel}
        >
          <h1>Edit Profile</h1>

          <div className="row">
            {/* <!-- left column --> */}
            <div className="col-md-3">
              <div className="text-center">
                {this.state.profile_image ? (
                  <img
                    className="col-12  "
                    style={{
                      width: "fit-content",
                      justifyContent: "center"
                    }}
                    src={this.state.profile_image}
                    alt={imageNotFound}
                  />
                ) : (
                  <img
                    className="col-12 "
                    style={{
                      width: "fit-content",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    src={imageNotFound}
                    alt={imageNotFound}
                  />
                )}
                <h6>Upload a different photo...</h6>

                <input
                  type="file"
                  // className="form-control"
                  name="profile_image"
                  //   value={this.state.profile_image}
                  onChange={this.onImageChange}
                  id="inputFileToLoad"
                />
              </div>
            </div>

            {/* <!-- edit form column --> */}
            <div className="col-md-9 personal-info">
              <div className="alert alert-info alert-dismissable">
                <a className="panel-close close" data-dismiss="alert">
                  ×
                </a>
                <i className="fa fa-coffee" />
                This is an <strong>.alert</strong>. Use this to show important
                messages to the user.
              </div>
              <h3>Personal info</h3>

              <div className="form-group">
                <label className="col-lg-3 control-label">Phone Number:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="phone_number"
                    value={this.state.phone_number}
                    onChange={this.onTextchange}
                    placeholder={"+966"}
                  />
                </div>
              </div>
              {/* Rest of info goes here */}
              <div className="form-group">
                <label className="col-md-3 control-label" />
                <div className="col-md-8">
                  <button className="btn btn-primary" type="submit">
                    Save Changes
                  </button>

                  <button className="btn btn-danger" onClick={this.resetForm}>
                    Reset All fields
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    profile: state.profileReducer.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    putProfile: (updatedProfile, reset, history) =>
      dispatch(actionCreators.putProfile(updatedProfile, reset, history)),
    setErrors: () => dispatch(actionCreators.setErrors({}))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfileForm);
