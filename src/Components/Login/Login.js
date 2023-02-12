import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="main">
      <div className="heading-wrapper">
        {" "}
        <p>
          Post a <span>Free</span> today
        </p>
      </div>
      <div className="input-wrapper">
        <input type="input" placeholder="Phone No" />
        <input type="input" placeholder="Email" />
        <input type="input" placeholder="Create Password" />
        <input type="input" placeholder="Confirm Password" />
      </div>
      <div className="button-wrapper" id="button-wrapperid">
        <button type="click" className="btn-1">
          Cancel
        </button>
        <button type="submit" id="btn-2">
          Submit
        </button>
      </div>
      <div className="haveAcc-wrapper">
        <h3>Have a account?</h3>
        <button id="signIn" type="click">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
