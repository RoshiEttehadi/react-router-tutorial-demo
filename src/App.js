import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
// import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import DonatePage from "./pages/DonatePage";
import SignUpPage from "./pages/SignUpPage";
import UserProfile from "./pages/UserProfile";
import CreateProject from "./pages/CreateProject";
import Header from "./Header/Header";

function App() {
  const token = window.localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(token != null);

  return (
    <Router>
      <Route path="/">
        <Header />
      </Route>
      <div>
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/project">
            <ProjectPage />
          </Route>
          <Route path="/donate">
            <DonatePage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/create-project">
            <CreateProject />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
          <Route path="/login">
            <LoginPage setLoggedIn={setLoggedIn} />
          </Route>
          {/* <Route path="/contact">
            <ContactPage />
          </Route> */}
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
