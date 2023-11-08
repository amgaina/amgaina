import React from "react";
import front_end from "./front.jpeg";
import other_skills from "./other.jpeg";
import "./skills.css";
export default function Skills(){
    return (
        <section id = "skills">
          <p className = "h1">Skills </p>
        <div className="container pt-5">
        <div className = "row ">
        <div className = "col-md-3 pt-5 text-center">
          <img src={front_end} className="img-fluid" alt="Front End Skills"/>
          </div>
        <div className = "col-md-3 pt-5 text-center" id = "skills2">
            <img src={other_skills} className="img-fluid" alt="Other Skills"/>
        </div>  
      </div>
      </div>
      </section>

    )
}