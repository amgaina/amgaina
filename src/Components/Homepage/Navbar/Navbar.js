import React from "react";
import "./Navbar.css";
import Projects from "../../Projects/Projects_show";
import Skills from "../../Skills/skills";
import Contact from "../../Contact/contact";

export default function Navbar(){
  function scroll(targetSection){
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function ScrollIntoSkills(){
    const name = document.getElementById("skills");
    scroll(name);
  }
function ScrollIntoContact(){
  const name = document.getElementById("contact");
    scroll(name);
}

  function ScrollIntoProjects(){
    const name = document.getElementById("projects");
    scroll(name);
  }
    return(
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id = "nav-bar">
            <div className="container-fluid">
                <h3> Abhishek_Amgain</h3>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
        <li className="nav-item ">
          <a className="nav-link text-center p-5" href="#home-page">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center p-5" href={Projects} onClick = {ScrollIntoProjects} >Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center p-5" href={Skills} onClick = {ScrollIntoSkills}>Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center p-5" href = {Contact} onClick = {ScrollIntoContact}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )

}