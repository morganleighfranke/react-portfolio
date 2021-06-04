import React from 'react';
import './style.css';
import PWA from './images/PWA.png'

function Portfolio () {
    return (
        <section id="portfolio">
            <div className="container">
            <div className="row justify-content-center">
            <h2 className="text-center mt-5 portfolio">Portfolio</h2>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={PWA} className="card-img-top" alt="ppco" />
                        <div className="card-body">
                            <h5 className="card-title">Progressive Web Application</h5>
                            <p className="card-text">Homework assignment</p>
                            <a href="https://parentingpracticeco.herokuapp.com/" target="blank" className="btn btn-dark btn-outline-light">Go to Application</a>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </section>

    )

}

export default Portfolio;