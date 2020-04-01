import React from "react";
import { Style } from "../register/registerStyles";

const ConfirmLogin = () => {
  return (
    <div style={Style.background} className="pt-5 container">
      <div
        className="col-lg-5 col-md-8 col-sm-12 align-middle"
        style={Style.card}
      >
        <h2 styles={Style.header} className="mb-5">
          Confirm Login
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
                  <strong> Enter passcode sent to your phone </strong>
                </small>
              </div>
              <div className="form-group ">
                <button type="button" class="btn btn-primary col-12 rounded-0">
                  <strong>Login</strong>
                  <span style={LoginStyle.span}>
                    <i class="fas fa-check-circle"></i>
                  </span>
                </button>
                <small
                  className="form-text text-muted"
                  style={Style.inputColor}
                ></small>
              </div>
            </div>
            <div className="form-group mt-5">
              You did not receive the passcode SMS? <br />
              <a href="http://###">
                <strong>Resend.</strong>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogin;

const LoginStyle = {
  span: {
    padding: "10px"
  }
};
