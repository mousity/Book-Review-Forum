import React, { Fragment, onChange, useEffect, useState } from "react";
import books from "./pageData";
import BookCard from "./bookCard";
import NewBook from "./newBook";
import About from "./UI/AboutModal";
import PageContent from "./pageContent";

export default function NavBar () {

    const [titleQuery, setTitleQuery] = useState("");
    const [authorQuery, setAuthorQuery] = useState("");
    const [isAboutActive, setIsAboutActive] = useState(false);
    const apiURL = "http://localhost:3000/books";
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
                <img className="logo" src="src\assets\Logo.jpg" alt="Book Cat"></img>
                <h1 className="topTitle">Path of Pages Forum</h1>
            </span>
            <div className="page">
                <div className="navbar">
                    <input id="searchTitle" placeholder="Search Book Title" onChange={handleTitleChange}/>
                    <input id="searchAuthor" placeholder="Search Book Author" onChange={handleAuthorChange}/>
                    <button className="navButton">Home</button>
                    <button className="navButton" onClick={handleAbout}>About Us</button>
                    <button className="navButton">Favorites</button>
                </div>
                <PageContent apiURL={apiURL} titleQuery={titleQuery} authorQuery={authorQuery}/>
            </div>
            <div className="footer">
                <a href="https://github.com/mousity" className="link">GitHub</a>
                <a href="https://www.linkedin.com/in/samrmouna/" className="link">LinkedIn</a>
            </div>
        </div>
        <About isVisible={isAboutActive} hideModal={hideModal}>
        </About>
        </>
    )
}

