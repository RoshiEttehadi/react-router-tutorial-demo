import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUpForm.css";

function SignUpForm() {
  // variables
  const [credentials, setCredentials] = useState({
    amount: "",
    comment: "",
    anonymous: null,
    project: "",
  });

  console.log(credentials);

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
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
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
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        history.push("/");
      });
    }
  };

  return (
    <form>
      <div className="pledgeform">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter amount"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          name="comment"
          placeholder="Enter comment"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="anonymous">Anonymous:</label>
        <input
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
        <label htmlFor="project">Project:</label>
        <input
          type="text"
          id="project"
          name="project"
          placeholder="Name of the project"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default SignUpForm;
