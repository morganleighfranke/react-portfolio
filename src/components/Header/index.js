import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand">  <Link
                  to="/"
                  className={
                    window.location.pathname === "/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Morgan Franke
                </Link>
                </div>
                <div
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon active"></span>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item active">
              <Link
                  to="/portfolio"
                  className={
                    window.location.pathname === "/portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item active">
              <Link
                  to="/contact"
                  className={
                    window.location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
