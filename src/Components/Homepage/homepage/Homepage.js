import React from "react";
import "./Homepage.css";
import image from "./Abhishek Amgain.jpeg";
import projects from "../../Projects/Projects_show";

export default function Homepage(){
  function scrollToProjectSection() {
    const targetSection = document.getElementById("projects");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
    return(
        <section  className = "container mt-5"id="homepage">
        <div className="container pt-5">
          <div className="row ">
            <div className="col-md-6 p-5">
              <img src={image} className="img-fluid" alt="Abhishek-Amgain" />
            </div>
            <div className="col p-5" >
              <h1>Introduction</h1><h1><br/>I'm <span className="name">Abhishek</span>, a Computer Science student</h1>
              <h5 id = "text-homepage">
                "With a solid understanding of programming concepts and a passion for technology, I am eager to apply my skills 
                to real-world projects and gain valuable hands-on experience. I have demonstrated my ability to work collaboratively 
                and effectively on team projects during my career. I am looking for new challenges and opportunities to expand my 
                knowledge and skills. I am eager to make a positive impact in the field of computer science and contribute to the development of cutting-edge technologies."</h5>
    
            </div>
          </div>
        </div>
        <div class = "text-center">
        <a class="btn btn-secondary dropdown-toggle text-center" href = {projects} onClick = {scrollToProjectSection}role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Scroll to the next page </a> 
      </div>
      </section>)
}