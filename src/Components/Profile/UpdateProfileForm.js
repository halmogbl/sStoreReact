import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import imageNotFound from "../../assets/images/notfound.png";
import { Link } from "react-router-dom";

class UpdateProfileForm extends Component {
  componentDidMount() {
    this.props.profile &&
      this.setState({
        image: this.props.profile.image,
        phone_number: this.props.profile.phone_number,
        first_name: this.props.profile.user.first_name,
        last_name: this.props.profile.user.last_name,
        email: this.props.profile.user.email
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      console.log("show your self", this.props.profile.user.first_name);

      this.setState({
        image: this.props.profile.image,
        phone_number: this.props.profile.phone_number,
        first_name: this.props.profile.user.first_name,
        last_name: this.props.profile.user.last_name,
        email: this.props.profile.user.email
      });
    }
  }
  state = {
    phone_number: "",
    profile_image_file: "",
    image: "",
    first_name: "",
    last_name: "",
    email: "",
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
      <div className="col-12" style={{ padding: 20 }}>
        <form
          style={{ background: "#fff", padding: 20, borderRadius: 20 }}
          className="col-12"
          role="form"
          onSubmit={this.submitChannel}
        >
          <h1>Update Profile</h1>

          <div className="col-3">
            <div
              className="text-cente"
              style={{ padding: 10, textAlign: "center" }}
            >
              {this.state.image ? (
                <img
                  className="col-12"
                  style={{
                    width: 120,
                    height: 120,
                    justifyContent: "center"
                  }}
                  src={this.state.image}
                  alt={imageNotFound}
                />
              ) : (
                <img
                  className="col-12"
                  style={{
                    width: "fit-content",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                  src={imageNotFound}
                  alt={imageNotFound}
                />
              )}
              <div style={{ fontSize: 12 }} className="col-12">
                Upload a different photo...
              </div>

              <input
                style={{ fontSize: 12 }}
                className="col-12"
                type="file"
                name="profile_image_file"
                onChange={this.onImageChange}
                id="inputFileToLoad"
              />
            </div>
          </div>

          <div className="col-9 personal-info">
            {this.state.alertUpload ? (
              <div className="alert alert-info alert-dismissable col-12">
                <a className="panel-close close" data-dismiss="alert">
                  ×
                </a>
                <i className="fa fa-coffee" />
                Image <strong>Uploaded</strong> press save
              </div>
            ) : (
              <></>
            )}
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
              <label className="col-lg-3 control-label">first name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.onTextchange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">last name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.onTextchange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">email:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.onTextchange}
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
