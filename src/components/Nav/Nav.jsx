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
    <nav className="nav">
      <div>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About Us</Link>
        {/* <Link to="/contact">Contact</Link> */}
        <Link className="nav-link" to="/create-project">Create a Project</Link>
        {!loggedIn ? (
          <Link className="nav-link" to="/login">Log In/ Sign Up</Link>
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
