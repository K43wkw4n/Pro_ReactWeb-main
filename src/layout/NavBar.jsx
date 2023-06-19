import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <NavLink to="/">
            <div className="logo d-flex align-items-center">
              <h1>
                Sumeru<span>.</span>
              </h1>
            </div>
          </NavLink>

          <div id="navbar" className="navbar">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Books">Books</NavLink>
              </li>
              <li>
                <NavLink to="/Cart">
                  <BiCartAlt size={20} />
                </NavLink>
              </li>

              <li>
                <NavLink to="/Login">Login</NavLink>
              </li>
            </ul>
          </div>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </div>
    </div>
  );
}
