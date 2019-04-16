import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          background: "#fff",
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 10
        }}
      >
        <div
          className="col-12"
          style={{
            marginTop: 20,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
            background: "#fff",
            borderRadius: 10
          }}
        >
          <div style={{ padding: 10 }} className="col-12">
            <div class="bd-example">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="0"
                    class="active"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="1"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="2"
                  />
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://apexgadgetstories.com/wp-content/uploads/2019/02/honor-8x-5-1024x480-1024x585.jpg"
                      class="d-block w-100"
                      alt="..."
                      style={{
                        height: "400px",
                        width: "100%",
                        objectFit: "cover"
                      }}
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>coool Mobile</h5>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://ae01.alicdn.com/kf/HTB1fTxZKxWYBuNjy1zkq6xGGpXaC.jpg"
                      class="d-block w-100"
                      alt="..."
                      style={{
                        height: "400px",
                        width: "100%",
                        objectFit: "cover"
                      }}
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  {/* <div class="carousel-item">
                    <img
                      src="https://previews.123rf.com/images/arrow/arrow1508/arrow150800028/43966988-online-shopping-e-commerce-concept-background.jpg"
                      class="d-block w-100"
                      alt="..."
                      style={{
                        height: "400px",
                        width: "100%",
                        objectFit: "cover"
                      }}
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </div>
                  </div> */}
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div style={{ padding: 10 }} className="col-6">
              <div class="bd-example">
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="0"
                      class="active"
                    />
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="1"
                    />
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="2"
                    />
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://cdn1.expertreviews.co.uk/sites/expertreviews/files/2017/04/canon-eos5div_main.jpg?itok=3JthqenX"
                        class="d-block w-100"
                        alt="..."
                        style={{
                          height: "200px",
                          width: "100%",
                          objectFit: "cover"
                        }}
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://cdn1.expertreviews.co.uk/sites/expertreviews/files/2017/04/canon-eos5div_main.jpg?itok=3JthqenX"
                        class="d-block w-100"
                        alt="..."
                        style={{
                          height: "200px",
                          width: "100%",
                          objectFit: "cover"
                        }}
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://cdn1.expertreviews.co.uk/sites/expertreviews/files/2017/04/canon-eos5div_main.jpg?itok=3JthqenX"
                        class="d-block w-100"
                        alt="..."
                        style={{
                          height: "200px",
                          width: "100%",
                          objectFit: "cover"
                        }}
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6" style={{ padding: 10 }}>
              <div class="bd-example">
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="0"
                      class="active"
                    />
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="1"
                    />
                    <li
                      data-target="#carouselExampleCaptions"
                      data-slide-to="2"
                    />
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://www.lg.com/uk/lg-magazine/images/what-is-new/2018/g7-unveiling/lg-magazine_unveiling_the_lg_g7_thinq_key-visual.jpg"
                        class="d-block w-100"
                        alt="..."
                        style={{
                          height: "200px",
                          width: "100%",
                          objectFit: "cover"
                        }}
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://www.lg.com/uk/lg-magazine/images/what-is-new/2018/g7-unveiling/lg-magazine_unveiling_the_lg_g7_thinq_key-visual.jpg"
                        class="d-block w-100"
                        alt="..."
                        style={{
                          height: "200px",
                          width: "100%",
                          objectFit: "cover"
                        }}
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    {/* <div class="carousel-item">
                      <img
                        src="https://previews.123rf.com/images/arrow/arrow1508/arrow150800028/43966988-online-shopping-e-commerce-concept-background.jpg"
                        class="d-block w-100"
                        alt="..."
                        style={{
                          height: "200px",
                          width: "100%",
                          objectFit: "cover"
                        }}
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </div>
                    </div> */}
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Home);
