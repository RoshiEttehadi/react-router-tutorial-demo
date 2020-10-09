import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUpForm.css";

function SignUpForm() {
  // variables
  const [credentials, setCredentials] = useState({
    name: "",
    anonymous: null,
    age: "",
    gender: "",
    email: "",
    username: "",
    password: "",
  });

  // console.log(credentials);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    if (credentials.name && 
      credentials.anonymous && 
      credentials.age && 
      credentials.gender && 
      credentials.email && 
      credentials.username && 
      credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        history.push("/");
      });
    }
  };

  return (
    <form className="signupform">
      <h2 id="headerTitle">Sign Up</h2>
      <div>
        <label class="row" htmlFor="name">Name:</label>
        <input class="row" 
          type="text"
          id="name"
          name="name"
          placeholder="Please enter your fullname"
          onChange={handleChange}
        />
      </div>
      <div>
        <label class="row"  htmlFor="anonymous">Anonymous:</label>
        <input class="row" 
          type="radio"
          id="isAnonymous"
          name="anonymous"
          value={true}
          checked={credentials.anonymous === "true"}
          onChange={handleChange}
        />
        Yes
        <input
          type="radio"
          id="isNotAnonymous"
          name="anonymous"
          value={false}
          checked={credentials.anonymous === "false"}
          onChange={handleChange}
        />
        No
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="How old are you?"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={credentials.gender === "male"}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={credentials.gender === "female"}
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          id="prefer not to say"
          name="gender"
          value="other"
          checked={credentials.gender === "other"}
          onChange={handleChange}
        />
        Prefer not to say
      </div>
      <div>
        <label class="row"htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Please enter your email address"
          onChange={handleChange}
        />
      </div>
       <div>
        <label class="row" htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your Username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label class="row" htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your age"
          onChange={handleChange}
        />
      </div>
      <div>
        <label class="row" htmlFor="project">Project:</label>
        <input class="row" 
          type="text"
          id="project"
          name="project"
          placeholder="Name of the project"
          onChange={handleChange}
        />
      <button id="button" type="submit" onClick={handleSubmit}>
        Submit
      </button>
      </div>
    </form>
  );
}

export default SignUpForm;
