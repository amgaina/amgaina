import React from "react";
import { useState } from "react";
import "./contact.css";
import facebook from "./facebook-icon.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import github from "./github.gif";

export default function Contact(){
    const[firstname, setFirstName] = useState("");
    const[lastname, setlastname] = useState("");
    const[message, setmessage] = useState("");
    const[email, setemail] = useState("");

    function getIsFormValid(){
        return(
            firstname && lastname && validate(email)
        );
    }
    function validate(a){
        if(a.indexOf('@') >-1){
            return true;
        }
        else{
            return false;
        }
    }
    function invalidEmail(a){
        if(a.indexOf('@') < 0){
            return (<p className = "text-danger">Invalid Email. Should contain '@'</p>)
        }
    }

    function clearForm(){
        setFirstName("");
        setemail("");
        setlastname("");
        setmessage("");
    }
    const handleSubmit= (e) =>{
        e.preventDefault();
        alert("Thank you for contacting me. I will reach out to you as soon as possible !!");
        clearForm();
        try{
            const formEl = document.querySelector("form");
            const formData = new FormData(formEl);
            fetch("https://script.google.com/macros/s/AKfycbyL_oVwQJuMDMf56Ruf0KHnF7hAgP-Inl2r4-wByNyyClZ51iORoajfmYBEqCZtZfyX/exec",{
                method:"POST",
                    body:formData
            }
            );
        }
        
        catch(err){
            console.log(err);
        }
    }

    function isFieldRequired(required){
        return required;
    }
    return(
        <section id = "contact">
            <p class = "container h1 pt-5 mt-3 text-decoration-underline text-danger text-center"> Contact Form </p>
            <form className = "text-center d-flex flex-column pt-5" onSubmit={handleSubmit}>
            <label className="h4 pt-4" htmlFor="firstName">  First Name{isFieldRequired(true)? <span className = "text-danger">*</span>: null} </label>
            <input type = "text"  value = {firstname} className = "custom-input mx-auto" onChange ={(e)=> {setFirstName(e.target.value)}} required placeholder="Enter your first Name" id = "firstName"/>
            <label className="h4 pt-4" htmlFor="lastName">Last Name{isFieldRequired(true)? <span className = "text-danger">*</span>: null}  </label>
            <input type = "text"  value = {lastname} className = "custom-input mx-auto" onChange = {(e) =>{setlastname( e.target.value)}} required placeholder="Enter your last Name" id = "lastName"/> 
            <label className="h4 pt-4" htmlFor="email"> Email{isFieldRequired(true)? <span className = "text-danger">*</span>: null}  </label>
            <input type = "email"  value = {email} className = "custom-input mx-auto" onChange = {(e) =>{setemail(e.target.value)}} required placeholder="Enter your email "  id = "email"/>
            {
                invalidEmail(email)
            }
            <label className="h4 pt-4" htmlFor="message"> Message </label> 
            <textarea  value = {message} className = "custom-input mx-auto" onChange = {(e) => {setmessage(e.target.value)}} placeholder="Enter your message" id = "message"/>
            <button className = "btn btn-primary btn-block mx-auto" type = "submit" onClick = {handleSubmit} disabled ={!getIsFormValid()}> Submit </button>
            </form>
            <div className="container mt-5 text-center">
            <a href = "https://www.facebook.com/abhishek.amgain" alt = "facebook" target = "_"><img className = "image-fluid social-logo" alt = "social-logo" src = {facebook}/></a>
            <a href = "https://www.instagram.com/abhishekamgain/" alt = "instagram" target = "_"> <img className = "image-fluid social-logo" alt = "social-logo" src = {instagram}/></a>
            <img className = "image-fluid social-logo" alt = "social-logo" src = {twitter}/>
            <a href = "https://github.com/amgaina" alt = "gitHub" target = "_"><img className = "image-fluid social-logo" alt = "social-logo" src = {github}/></a>
            </div>
            <hr/>
            <hr/>
            <div className = "footer text-center">
            <span className="copyright"> &copy;</span> 2023 Abhishek Amgain. All rights reserved. |<br/>
            Contact me | Privacy Policy | Terms of Service |
            </div>
            
        </section>
    )
}