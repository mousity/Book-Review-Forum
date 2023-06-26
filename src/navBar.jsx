import React, { Fragment, onChange, useState } from "react";
import books from "./pageData";
import BookCard from "./bookCard";

export default function NavBar () {

    const [titleQuery, setTitleQuery] = useState("");
    const [authorQuery, setAuthorQuery] = useState("");
    function handleTitleChange(event) {
        setTitleQuery(event.target.value);
    }

    function handleAuthorChange(event) {
        setAuthorQuery(event.target.value);
    }

    return (
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
                    <button className="navButton">About Us</button>
                    <button className="navButton">Favorites</button>
                </div>

                <div className="content">
                    <div className="contentChild">
                        <BookCard books={books} titleQuery={titleQuery} authorQuery={authorQuery}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>GitHub</p>
                <p>LinkedIn</p>
            </div>
        </div>
    )
}

