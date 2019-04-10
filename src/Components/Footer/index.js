import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <div className="col-12" style={{ marginTop: 20 }}>
        <footer
          className="page-footer font-small cyan darken-3"
          style={{ background: "#fff", paddingTop: 30, paddingBottom: 30 }}
        >
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-gplus mx-1">
                <i className="fab fa-google-plus-g"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1">
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-dribbble mx-1">
                <i className="fab fa-dribbble"> </i>
              </a>
            </li>
          </ul>
          <div className="footer-copyright text-center py-3">
            © 2019 Copyright
            {/* <a href="https://mdbootstrap.com/education/bootstrap/">
              {" "}
              MDBootstrap.com
            </a> */}
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(null)(Footer);
