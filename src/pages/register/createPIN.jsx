import React from "react";
import { Style } from "./registerStyles";

const CreatePIN = () => {
  return (
    <div style={Style.background} className="pt-5 container">
      <div
        className="col-lg-5 col-md-8 col-sm-12 align-middle"
        style={Style.card}
      >
        <h2 style={Style.header} className="mb-5">
          Create PIN
        </h2>
        <form>
          <div className="form-group ">
            <input
              type="password"
              className="form-control border-bottom border-dark rounded-0"
              style={Style.input}
              required
            />
            <small className="form-text text-muted" style={Style.inputColor}>
              <strong>Enter New Password</strong> <br />
            </small>
          </div>
          <div className="form-group ">
            <input
              type="password"
              className="form-control border-bottom border-dark rounded-0"
              style={Style.input}
              required
            />
            <small className="form-text text-muted" style={Style.inputColor}>
              <strong>Confirm New Password</strong> <br />
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
  );
};

export default CreatePIN;
