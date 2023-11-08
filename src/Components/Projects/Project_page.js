import React from "react";
import "./Project.css";
export default function Project(props){
    return(
        <div className = "col-md-6 pb-5 text-center">
            <img src = {props.img} alt = "Projects_image" className = "img-fluid rounded"/>
            <h3 className = "h1">{props.project_name}</h3>
            <h4>({props.project_type})</h4>
            <h6>{props.description}</h6>
            <h6> Skills : {props.skills}</h6>
            <button><a href = {props.href} target = "_blank" rel="noreferrer"> Visit Site </a></button>
        </div> 
    )
}