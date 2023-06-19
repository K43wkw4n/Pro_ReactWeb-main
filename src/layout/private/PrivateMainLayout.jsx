import React from "react";
import {SideBar}  from "./SideBar"
import { PrivateNavbar } from "./PrivateNavbar";

const PrivateMainLayout = ({ children }) => {
  return (
    // <div id="wrapper">
    //   <SideBar />
    //   <div id="content-wrapper" className="d-flex flex-column">
    //     <div id="content">
    //       <div className="container-fluid">{children}</div>
    //     </div>
    //   </div>
    // </div>

    <>
    <SideBar/>
    <PrivateNavbar/>
    <div>{children}</div>
    </>
    
  );
};

export default PrivateMainLayout;