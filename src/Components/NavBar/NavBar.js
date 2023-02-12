import React from "react";
import "./NavBar.css";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import {
  FaFacebook,
  FaHamburger,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { DiApple } from "react-icons/di";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {" "}
        <div className="nav-container">
          <div className="nav-hamburger">
            <a href="#" onClick={() => setMobileMenu(!mobileMenu)}>
              <Hamburger />
            </a>
          </div>{" "}
          <div className={mobileMenu ? "mobile-menu" : "menu-link"}>
            {/* menu-Contents */}
            <ul>
              <li>
                {" "}
                <a href="#">Why us</a>
                {/* <NavLink to="/home">Home</NavLink> */}
              </li>

              <li>
                {" "}
                <a href="#">About</a>
                {/* <Link to="/about">About</Link> */}
              </li>
            </ul>
          </div>
          <div className="social-media">
            <a href="#">Register Now</a>{" "}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
