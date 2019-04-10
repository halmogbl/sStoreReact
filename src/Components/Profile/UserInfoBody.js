import React, { Component } from "react";
import { connect } from "react-redux";
import imageNotFound from "../../assets/images/notfound.png";

class UserInfoBody extends Component {
  render() {
    return (
      <>
        <div class="col-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h1>User Profile</h1>
            </div>
            <div class="panel-body">
              <div class="box box-info">
                <div class="box-body">
                  <div class="col-12">
                    <div align="center">
                      {this.props.image ? (
                        <div>
                          <img
                            style={{
                              width: 120,
                              height: 120,
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: "50%",
                              border: "2px solid #e7e7e7"
                            }}
                            src={this.props.image}
                            alt=".."
                          />
                        </div>
                      ) : (
                        <img
                          style={{
                            width: 100,
                            height: 100,
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                          src={imageNotFound}
                          alt={imageNotFound}
                        />
                      )}
                    </div>

                    <br />
                  </div>
                  <div class="clearfix" />
                  <hr style={{ margin: "5px 0 5px 0" }} />

                  <div class="col-sm-5 col-xs-6 tital ">First Name:</div>
                  <div class="col-sm-7 col-xs-6 ">
                    {this.props.profile.user.first_name}
                  </div>
                  <div class="clearfix" />
                  <div class="bot-border" />

                  <div class="col-sm-5 col-xs-6 tital ">Last Name:</div>
                  <div class="col-sm-7">
                    {" "}
                    {this.props.profile.user.last_name}
                  </div>
                  <div class="clearfix" />
                  <div class="bot-border" />

                  <div class="col-sm-5 col-xs-6 tital ">Username:</div>
                  <div class="col-sm-7">
                    {" "}
                    {this.props.profile.user.username}
                  </div>
                  <div class="clearfix" />
                  <div class="bot-border" />

                  <div class="clearfix" />
                  <div class="bot-border" />

                  <div class="col-sm-5 col-xs-6 tital ">Emial:</div>
                  <div class="col-sm-7">{this.props.profile.user.email}</div>

                  <div class="clearfix" />
                  <div class="bot-border" />

                  <div class="col-sm-5 col-xs-6 tital ">Phone Number:</div>
                  <div class="col-sm-7">{this.props.profile.phone_number}</div>

                  <div class="clearfix" />
                  <div class="bot-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <tr>
          <td>{this.props.profile.id}</td>
          <td>{this.props.profile.user.username}</td>
          <td>{this.props.profile.user.first_name}</td>
          <td>{this.props.profile.user.last_name}</td>
          <td>{this.props.profile.user.email}</td>
          <td>{this.props.profile.phone_number}</td>
        </tr> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
    loading: state.profileReducer.loading
  };
};

export default connect(mapStateToProps)(UserInfoBody);
