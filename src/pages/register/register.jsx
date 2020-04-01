import React from "react";
import { Style } from "./registerStyles";

const Register = () => {
  return (
    <div style={Style.background} className="pt-5 container">
      <div
        className="col-lg-5 col-md-8 col-sm-12 align-middle"
        style={Style.card}
      >
        <h2 style={Style.header} className="mb-5">
          Create an account
        </h2>
        <div>
          <form>
            <div className="row ">
              <div className="col">
                <input
                  type="text"
                  className="form-control border-bottom border-dark rounded-0"
                  style={Style.input}
                  required
                />
                <small
                  className="form-text text-muted"
                  style={Style.inputColor}
                >
                  <strong> First Name </strong>
                </small>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control border-bottom border-dark rounded-0"
                  style={Style.input}
                  required
                />
                <small
                  className="form-text text-muted"
                  style={Style.inputColor}
                >
                  <strong> Last Name</strong>
                </small>
              </div>
            </div>

            <div className="form-group "></div>

            <div className="form-group ">
              <input
                type="date"
                className="form-control border-bottom border-dark rounded-0"
                style={Style.input}
                required
              />
              <small className="form-text text-muted" style={Style.inputColor}>
                <strong> Date of Birth</strong>
              </small>
            </div>

            <div className="form-group ">
              <input
                type="tel"
                className="form-control border-bottom border-dark rounded-0"
                style={Style.input}
                required
              />
              <small className="form-text text-muted" style={Style.inputColor}>
                <strong> Phone</strong>
              </small>
            </div>

            <div className="form-group ">
              <input
                type="email"
                className="form-control border-bottom border-dark rounded-0"
                style={Style.input}
                required
              />
              <small className="form-text text-muted" style={Style.inputColor}>
                <strong>Email</strong>
              </small>
            </div>
            <div className="form-group ">
              <input
                type="text"
                className="form-control border-bottom border-dark rounded-0"
                style={Style.input}
                required
              />
              <small className="form-text text-muted" style={Style.inputColor}>
                <strong> BVN</strong>
              </small>
            </div>
            <div className="form-group ">
              <button type="button" class="btn btn-primary col-12 rounded-0">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
