import React from "react";
import "./style.css";
import PWA from "./images/PWA.png";
import EmployeeDirectory from "./images/employeedirectory.png";

function ProjectCard(props) {
  const projectData = [
    {
      title: "Progressive Web Application",
      description:
        "this is a PWA that allows you to track your budget online and offline.",
      image: { PWA },
      githublink: "https://github.com/morganleighfranke/online-offline_budget_tracker",
      deployedlink: "https://still-caverns-81886.herokuapp.com/",
    },

    {
      title: "Employee Directory",
      description:
        "An employee directory using react  that allows you to view an entiree directory at once and search for an employee.",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-916a8.appspot.com/o/screenshot.png?alt=media&token=2fcf63c1-9c14-4261-a1a2-98ced0d2adf7",
      githublink: "https://github.com/morganleighfranke/employeedirectory3",
      deployedlink: "https://morganleighfranke.github.io/employeedirectory3/",
    },

    {
        title: "",
        description: "",
        image: "",
        githublink: "",
        deployedlink: "",
    }
  ];

  return (
    <div>
      {projectData.map((project, index) => {
        return (
         <div key={index}> 
        <div className="card">
        <img src={project.image} className="card-img-top" alt={project.title} target="_blank"/>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p>{project.description}</p>
          <a href={project.githublink} target="_blank">Github Repository</a>
          <br/>
          <a href={project.deployedlink} target="_blank">Deployed Application</a>
        </div>
      </div>
    </div>
      )})}
</div>


  );
}

export default ProjectCard;
