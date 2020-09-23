import React, { useState, useEffect } from "react";
// import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard";

function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_APT_URL}projects`)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            setProjectList(data);
        });
        // serProjectList(allProjects)
    }, []);

 return (
<div id="project-List">
    {projectList.map((projectData, key) => {
    return <ProjectCard key={key} projectData={projectData} />;
})}
</div>
 );
}

export default HomePage;
