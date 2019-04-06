import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import imageNotFound from "../../assets/images/notfound.png";
import { Link } from "react-router-dom";

class UpdateProfileForm extends Component {
  componentDidMount() {
    this.setState({
      image: this.props.profile.image,
      phone_number: this.props.profile.phone_number
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.setState({
        image: this.props.profile.image,
        phone_number: this.props.profile.phone_number
      });
    }
  }
  state = {
    phone_number: "",
    profile_image_file: "",
    image: "",
    alertUpload: false
  };

  submitChannel = async event => {
    event.preventDefault();
    this.props.updateProfile(this.state, this.props.history);
  };

  onTextchange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onImageChange = () => {
    let filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      let fileToLoad = filesSelected[0];
      this.setState({
        profile_image_file: fileToLoad,
        alertUpload: true,
        image: URL.createObjectURL(fileToLoad)
      });
      var fileReader = new FileReader();

      fileReader.readAsDataURL(fileToLoad);
    }
  };
  render() {
    return (
      <div className="container">
        <form
          className="form-horizontal"
          role="form"
          onSubmit={this.submitChannel}
        >
          <h1>Edit Profile</h1>

          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                {this.state.image ? (
                  <img
                    className="col-12  "
                    style={{
                      width: "fit-content",
                      justifyContent: "center"
                    }}
                    src={this.state.image}
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
                  name="profile_image_file"
                  onChange={this.onImageChange}
                  id="inputFileToLoad"
                />
              </div>
            </div>

            <div className="col-md-9 personal-info">
              {this.state.alertUpload ? (
                <div className="alert alert-info alert-dismissable">
                  <a className="panel-close close" data-dismiss="alert">
                    ×
                  </a>
                  <i className="fa fa-coffee" />
                  Image <strong>Uploaded</strong> press save
                </div>
              ) : (
                <></>
              )}
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
              <div className="form-group">
                <label className="col-md-3 control-label" />
                <div className="col-md-8">
                  <button className="btn btn-primary" type="submit">
                    Save Changes
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
    updateProfile: (updatedProfile, history) =>
      dispatch(actionCreators.updateProfile(updatedProfile, history)),
    setErrors: () => dispatch(actionCreators.setErrors({}))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfileForm);
