import React from "react";
import Resume from "./Resume/MorganFrankeTechnicalResume.pdf";

function ContactCard() {
    return(
        <div className="card">
        <h5 className="card-header text-center">Get in touch with me</h5>
        <div className="card-body text-center">
            <a href="http://www.linkedin.com/in/morganfranke" className="btn btn-primary" target="_blank" rel="noreferrer">LinkedIn</a>
            <span> </span>
            
            <a href="https://github.com/morganleighfranke" className="btn btn-primary" target="_blank" rel="noreferrer">GitHub</a>
            <span> </span>
            <a href={Resume} download="Morgan_Franke_Resume">
                <button type="submit" className="btn btn-primary">Download My Resume</button>
            </a>
            <span> </span>
            <a href = "mailto: morganleighfranke@gmail.com" className="btn btn-primary" target="_blank" rel="noreferrer">Email Me</a>
        </div>
        </div>
  
        )

}

export default ContactCard;