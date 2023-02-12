import React from "react";
import "./Footer.css";
import logo from "./icons.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="text-container">
        <div className="copyright">
          <p>Copyright © 2021 Excelsior Tutions Pvt Ltd. All rights reserved</p>
        </div>
        <div className="privacy">
          <p>Privacy</p>
          <p id="big-tc">Terms and Conditions</p>
          <p id="small-tc">T&C</p>
          <p>Refund Policy</p>
        </div>
      </div>
      <div className="contectusLogo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Footer;
