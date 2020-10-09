import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./CreateProject.css"

function CreateProject() {

  const date = new Date()
  // Variables
  const [credentials, setCredentials] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    status: null,
    date_created: date.toISOString(),
    owner: [],
  });

 
  console.log(credentials);

  const history = useHistory();
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((projectDetails) => ({
      ...projectDetails,
      [name]: value,
    }))
  }

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
    if (credentials.title &&
       credentials.description &&
       credentials.goal &&
       credentials.image &&
       credentials.status &&
       credentials.date_created &&
       credentials.owner) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        history.push("/");
      });
    }
  };

  return (
    <form>
      <div className="projectform">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Descripe your project"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <input
          type="radio"
          id="isopen"
          name="status"
          value={true}
          checked={credentials.status === "true"}
          onChange={handleChange}
        />
        Open
        <input
          type="radio"
          id="notopen"
          name="status"
          value={false}
          checked={credentials.status === "false"}
          onChange={handleChange}
        />
        Closed
      </div>
      <div>
        <label htmlFor="goal">Project:</label>
        <input
          type="number"
          id="goal"
          name="goal"
          placeholder="Goal of the Project"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="url"
          id="image"
          name="image"
          placeholder="Enter a URL to your most eye catching photo"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default CreateProject;