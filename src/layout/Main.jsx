import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Main = ({ children }) => {
  return (
    <>
        <NavBar/>
        <main id="main">{children}</main>
        <Footer/>
    </>
  );
};

export default Main;
