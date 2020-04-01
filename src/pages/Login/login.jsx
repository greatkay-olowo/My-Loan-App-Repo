import React from "react";
import { Style } from "../register/registerStyles";

const Login = () => {
  return (
    <div style={Style.background} className="pt-5  container">
      <div
        className="col-lg-5 col-md-8 col-sm-12 align-middle"
        style={Style.card}
      >
        <h2 style={Style.header} className="mb-5">
          Login
        </h2>
        <div>
          <form>
            <div className="row ">
              <div className="col">
                <input
                  type="tel"
                  className="form-control border-bottom border-dark rounded-0"
                  style={Style.input}
                  required
                />
                <small
                  className="form-text text-muted"
                  style={Style.inputColor}
                >
                  <strong> Enter your phone number </strong>
                </small>
              </div>
              <div className="form-group ">
                <button type="button" class="btn btn-primary col-12 rounded-0">
                  <strong>Next</strong>
                  <span style={LoginStyle.span}>
                    <i class="fas fa-angle-double-right"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="form-group mt-5">
              <small className="form-text text-muted" style={Style.inputColor}>
                A passcode SMS will be sent to your phone to verify you are the
                one trying to log in
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

const LoginStyle = {
  span: {
    padding: "10px"
  }
};
