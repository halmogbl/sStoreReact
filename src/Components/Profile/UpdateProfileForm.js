import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import imageNotFound from "../../assets/images/notfound.png";

class UpdateProfileForm extends Component {
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
    console.log("Hi");
    let filesSelected = document.getElementById("inputFileToLoad").files;
    console.log(filesSelected);
    if (filesSelected.length > 0) {
      let fileToLoad = filesSelected[0];
      this.setState({ profile_image: fileToLoad });
      var fileReader = new FileReader();

      fileReader.readAsDataURL(fileToLoad);
    }
  };

  render() {
    console.log(this.props.user);
    console.log(this.props.profile.profile_image);

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
                {this.props.profile.profile_image ? (
                  <img
                    className="col-12  "
                    style={{
                      width: "fit-content",
                      justifyContent: "center"
                    }}
                    src={this.props.profile.profile_image}
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
                    src={this.onImageChange}
                    alt={imageNotFound}
                  />
                )}
                <h6>Upload a different photo...</h6>

                <input
                  type="file"
                  //   className="form-control"
                  //   name="profile_image"
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
                  />
                </div>
              </div>
              {/* Rest of info goes here */}
              <div className="form-group">
                <label className="col-md-3 control-label" />
                <div className="col-md-8">
                  <a
                    href="profile/"
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.submitChannel}
                  >
                    Save Changes
                  </a>
                  <input
                    type="reset"
                    className="btn btn-default"
                    value="Cancel"
                    onClick={this.resetForm}
                  />
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
