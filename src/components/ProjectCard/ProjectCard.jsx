import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
  //variables
  const { projectData, image } = props;

  function copyLink() {
    const linkText =
      "https://desolate-lake-14847.herokuapp.com/project/" +
      projectData.id +
      "/";
    navigator.clipboard.writeText(linkText);
  }
  //template
  return (
    <div className="project-card">
      <Link to={`/project/${projectData.id}`}>
        <img alt="" className="project-img" src={image} />
        <h3>{projectData.title}</h3>
      </Link>
      {/* <div className="card-link"> */}
      {/* <button className="copy-link" onClick={copyLink}>
        Copy Link
      </button> */}
      <div className="buttons">
            <Link to="/donate">Donate</Link>;
      </div>
      {/* </div> */}
    </div>
  );
}
export default ProjectCard;
