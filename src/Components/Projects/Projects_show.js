import React from "react";
import Project from './Project_page.js';
import Projects from './Projects_list/projects.js';
import "./Project.css";

import img1 from "./Projects_list/mapit.png"
import img2 from "./Projects_list/chrome.png"
import img3 from "./Projects_list/mybnb.png"
import img4 from "./Projects_list/meme-generator.png"

export default function Projects_show(){
    return (
        <section className= "container pt-5" id = "projects" >
        <h1 className = "p-5 text-center">Projects</h1>
        <div className = "container">
        <div className="row">
        <div className="col-md-6 ">
        <Project 
        id = {Projects[0].id}
        img = {img1}
        href = "https://georgey764.github.io/MapIt/home-page.html"
        project_type = {Projects[0].project_type}
        project_name = {Projects[0].project_name}
        description = {Projects[0].description}
        skills = {Projects[0].skills}    />
        </div>
        <div className="col-md-6">
        <Project 
        id = {Projects[1].id}
        href = "https://github.com/amgaina/Create-a-Chrome-Extension"
        img = {img2}
        project_type = {Projects[1].project_type}
        project_name = {Projects[1].project_name}
        description = {Projects[1].description}
        skills = {Projects[1].skills}
        
        />
        </div>
        <div className="col-md-6">
        <Project 
        id = {Projects[2].id}
        img = {img3}
        href = "https://github.com/amgaina/MyBnb"
        project_type = {Projects[2].project_type}
        project_name = {Projects[2].project_name}
        description = {Projects[2].description}
        skills = {Projects[2].skills}    />
        </div>
        <div className="col-md-6 ">
        <Project 
        id = {Projects[3].id}
        img = {img4}
        href = "https://github.com/amgaina/Meme-Generator"
        project_type = {Projects[3].project_type}
        project_name = {Projects[3].project_name}
        description = {Projects[3].description}
        skills = {Projects[3].skills}    />
        </div>
        </div>
        </div>
        </section>
    )
}