import React from "react";
import "./style.css";

function ProjectCard(props) {
  const projectData = [
    {
      title: "Progressive Web Application",
      description:
        "this is a PWA that allows you to track your budget online and offline.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-916a8.appspot.com/o/PWA.png?alt=media&token=ddd53921-8ad3-4bca-aee2-7b30fa7091bc",
      githublink:
        "https://github.com/morganleighfranke/online-offline_budget_tracker",
      deployedlink: "https://still-caverns-81886.herokuapp.com/",
    },

    {
      title: "Employee Directory",
      description:
        "An employee directory using react  that allows you to view an entiree directory at once and search for an employee.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-916a8.appspot.com/o/screenshot.png?alt=media&token=2fcf63c1-9c14-4261-a1a2-98ced0d2adf7",
      githublink: "https://github.com/morganleighfranke/employeedirectory3",
      deployedlink: "https://morganleighfranke.github.io/employeedirectory3/",
    },

    {
      title: "Parenting Practice of Colorado",
      description:
        "For our group project we chose to work with a real client and build her a website that solves some of her business challenges. Parenting Practice of Colorado is owned by Paige LeGault who is a Pediatric Sleep Specialist, working with new parents to solve their newborns sleep challenges. Paige was using google forms to communicate important information back and forth with her clients on a daily basis which became hard to organize and manage. Now she can communicate directly through the user portal on her website with her clients for effective and efficient communication.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-916a8.appspot.com/o/ppco.png?alt=media&token=1c41a293-2259-4dd7-81ac-9b6a1f465f5a",
      githublink: "https://github.com/TolgaS92/Project-2-DU-Bootcamp",
      deployedlink: "https://parentingpracticeco.herokuapp.com/",
    },
    {
      title: "National Parks and Weather Service",
      description:
        "This was a group project where we integrated NPS and Open Weather API's to be able to search for a state and get a list of all National Parks in that state. When you click on a park, you get specific information about that park so you can plan your trip. You also will get that parks five day weather forecast to the specific latitude and longitude coordinates.",
      image: "https://firebasestorage.googleapis.com/v0/b/portfolio-916a8.appspot.com/o/NPWS.png?alt=media&token=ee18902e-d8d6-40d5-b1c3-2dc6bbed95e9",
      githublink: "https://github.com/TolgaS92/Project-1-DU-Bootcamp/",
      deployedlink: "https://tolgas92.github.io/Project-1-DU-Bootcamp/",
    },
    {
      title: "Coding Quiz",
      description:
        "This was a homework assignment where I created a coding quiz application that features a timer, mutiple choice questions, and saving high scores. ",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-916a8.appspot.com/o/Codequiz.png?alt=media&token=fa2fa3d2-4389-4954-ac9f-1a32edb2eb0f",
      githublink: "https://github.com/morganleighfranke/Code_Quiz",
      deployedlink: "https://morganleighfranke.github.io/Code_Quiz/",
    },
    {
      title: "Workday Scheduler",
      description:
        "This was a homework assignment that I created to tell the current date and time, add your schedule. The responsive application tells you the current time in red, the past time in gray, and future time in green. It saves your schedule to local storage so you can return to your saved items.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-916a8.appspot.com/o/Workday.png?alt=media&token=906017ab-78aa-4490-ae64-9763208de96c",
      githublink: "https://github.com/morganleighfranke/Day_Planner",
      deployedlink: "https://morganleighfranke.github.io/Day_Planner/",
    },
  ];

  return (
    <div className="container">
      <br/>
    <div>
      {projectData.map((project, index) => {
        return (
          <div key={index}>
            <div className="card col-md-6 ">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                target="_blank"
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p>{project.description}</p>
                <a href={project.githublink} target="_blank" rel="noreferrer">
                  Github Repository
                </a>
                <br />
                <a href={project.deployedlink} target="_blank" rel="noreferrer">
                  Deployed Application
                </a>
               
              </div>
            
            </div>
            <br/>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default ProjectCard;
