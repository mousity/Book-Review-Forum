import React, { Fragment, onChange, useEffect, useState } from "react";
import About from "./UI/AboutModal";
import PageContent from "./pageContent";
import { Outlet, Link } from "react-router-dom"

export default function NavBar () {

    const [titleQuery, setTitleQuery] = useState("");
    const [authorQuery, setAuthorQuery] = useState("");
    const [isAboutActive, setIsAboutActive] = useState(false);
    const apiURL = "http://localhost:3000/books";

    console.log(apiURL);
    function handleTitleChange(event) {
        setTitleQuery(event.target.value);
    }

    function handleAuthorChange(event) {
        setAuthorQuery(event.target.value);
    }


    const handleAbout = (e) => {
        e.preventDefault();
        setIsAboutActive(true);
    } 

    const hideModal = (e) => {
        e.preventDefault();
        setIsAboutActive(false);
    }

    return (
        <>
        <div className="entirePage">
            <span className="heading">
                <img className="logo" src="/src/assets/Logo.jpg" alt="Book Cat"></img>
                <h1 className="topTitle">Path of Pages Forum</h1>
            </span>
            <div className="page">
                <div className="navbar">
                    <input id="searchTitle" placeholder="Search Book Title" onChange={handleTitleChange}/>
                    <input id="searchAuthor" placeholder="Search Book Author" onChange={handleAuthorChange}/>
                    <Link to="/" className="navButton">Home</Link>
                    <button className="navButton" onClick={handleAbout}>About Us</button>
                    <Link to="/favorites" className="navButton">Favorites</Link>
                </div>
                <Outlet context={{apiURL, titleQuery, authorQuery}}/>
            </div>
            <div className="footer">
                <a href="https://github.com/mousity" target="_blank" className="link">GitHub</a>
                <a href="https://www.linkedin.com/in/samrmouna/" target="_blank" className="link">LinkedIn</a>
            </div>
        </div>
        <About isVisible={isAboutActive} hideModal={hideModal}>
        </About>
        </>
    )
}

