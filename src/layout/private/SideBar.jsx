import React from "react";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div>
      <div className="sidebar" data-color="white" data-active-color="danger">
        <div className="logo">
          <div className="simple-text logo-normal">Admin</div>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="active">
              <NavLink to="/">
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/All-Products">
                <i className="fa fa-book" aria-hidden="true"></i>
                <p>All Product</p>
              </NavLink>
            </li>
            
            {/* <li>
              <NavLink to="/CreateProduct">
                <i className="fa fa-pencil" aria-hidden="true"></i>
                <p>Create Product</p>
              </NavLink>
            </li> */}

            <li>
              <NavLink to="/OrderPage">
                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                <p>Order</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};
