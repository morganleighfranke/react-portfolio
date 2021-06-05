import React from "react";
import "./style.css";
import Resume from "./Resume/MorganFrankeTechnicalResume.pdf";


function Bio() {
  return (
    <div className="container">
      <br/>

      <div className="card">
        <div className="card-header">A little bit about me...</div>

        <div className="card-body">
          <div className="row justify-content-center">
            <p className="card-text">
              I'm a full stack web developer with 12 years experience in sales,
              sales management, and sales training. I'm interested in finding a
              hybrid role where I can use my client facing expertise along with
              my coding skills.
            </p>
            <div>
              <a href={Resume} className="btn btn-dark">
                Technical Resume
              </a>
              <span> </span>
              <a
                href="https://github.com/morganleighfranke"
                className="btn btn-dark"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
