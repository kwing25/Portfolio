import React from "react";
import "../Nav/nav.scss";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div class="nav">
      <ul className="nav nav-tabs">
        <li className="nav-item" >
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"} id="logo"
          >
            <h1 class="name">Kendra Wing</h1>
            <h3 class="title">Web Developer</h3>{" "}
          </a>{" "}
        </li>{" "}
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}

            className={currentPage === "About" ? "nav-link active" : "nav-link"} id="page-link"
          >
            About{" "}
          </a>{" "}
        </li>{" "}
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link" 
            } id="page-link"
          >
            Portfolio{" "}
          </a>{" "}
        </li>{" "}
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            } id="page-link"
          >
            Contact{" "}
          </a>{" "}
        </li>{" "}
      </ul>


    </div>

  );
}

export default Nav;

