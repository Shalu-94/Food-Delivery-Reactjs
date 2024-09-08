import React from "react";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <>
      <div className="container my-5">
        <footer className="text-white text-center text-lg-start bg-dark">
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About App</h5>

                <p>
                  Welcome to Shiro Foody App, where we’re redefining the way you experience food delivery. Our mission is simple: to bring delicious, high-quality meals right to your doorstep with a level of convenience and reliability that makes your life easier.
                </p>
                <p>
                  Founded in 2020, Shiro Foody started with a passion for food and a commitment to excellent service. We recognized the need for a food delivery service that combines variety, quality, and efficiency—all in one place.
                </p>

                <div className="mt-4">
                  <Link type="button" className="btn btn-floating btn-light btn-lg">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                  <Link type="button" className="btn btn-floating btn-light btn-lg">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </Link>
                  <Link type="button" className="btn btn-floating btn-light btn-lg">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                  <Link type="button" className="btn btn-floating btn-light btn-lg">
                    <i className="fa fa-google" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Address of Office</h5>

                {/* <div className="form-outline form-white mb-4">
                  <input type="text" id="formControlLg" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="formControlLg">Search</label>
                </div> */}

                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fa fa-home" aria-hidden="true"></i></span>
                    <span className="ms-2">14/995, Athithanar Street Kamaraj Nagar, opposite to Union Office, Pavoorchatram-627808</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    <span className="ms-2">shiroshalu@gmail.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fa fa-phone" aria-hidden="true"></i></span>
                    <span className="ms-2">+ 48 234 567 88</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2020 Copyright:
            <Link className="text-white" to="https://mdbootstrap.com/">ShaliniShiro.com</Link>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Foot;
