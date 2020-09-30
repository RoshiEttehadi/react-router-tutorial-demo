import React, { useState, useEffect } from "react";
// import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "./HomePage.css";

function HomePage() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setProjectList(data);
      });
    // serProjectList(allProjects)
  }, []);

  return (
    <div>
      <div className="homepage">
        <h2>Project of the Month</h2>
        <img
          id="projectimage"
          src={require("../images/1.jpg")}
          alt="Project Of the Month"
        />
        {/* <div className="buttons">
          <Link to="/project">Donate</Link>;
        </div> */}
      </div>
      <div id="project-List">
        {projectList.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
