import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import SignUpPage from "./SignUpPage";
import { Link } from "react-router-dom";

function LoginPage({setLoggedIn}) {
  return (
    <div>
      <div>
        <LoginForm setLoggedIn={setLoggedIn}/>
      </div>
      <div>
        <Link to="/SignUp">Create an Account</Link>
      </div>
    </div>
  );
}

export default LoginPage;
