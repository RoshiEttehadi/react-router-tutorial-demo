import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';
import "./Nav.css";

function Nav({ setLoggedIn, loggedIn }) {
  const location = useLocation();

  // useEffect(() => {
  //   const token = window.localStorage.getItem("token")
  //   token != null ? setLoggedIn(true) : setLoggedIn(false)
  // }, [location])

  return (
    <nav>
      <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        {/* <Link to="/contact">Contact</Link> */}
        <Link to="/project">Project</Link>
        {!loggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <button
            onClick={() => {
              setLoggedIn(false);
              window.localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
