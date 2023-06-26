import React, { Fragment, onChange, useState } from "react";
import books from "./pageData";
import BookCard from "./bookCard";

export default function NavBar () {

    const [query, setQuery] = useState("");
    function handleChange(event) {
        setQuery(event.target.value);
    }


    return (
        <div className="entirePage">
            <span className="heading">
                <img className="logo" src="src\assets\Logo.jpg" alt="Book Cat"></img>
                <h1 className="topTitle">Path of Pages Forum</h1>
            </span>
            <div className="page">
                <div className="navbar">
                    <input id="search" placeholder="Enter Book Title" onChange={handleChange}/>
                    <button className="navButton">Home</button>
                    <button className="navButton">About Us</button>
                    <button className="navButton">Favorites</button>
                </div>

                <div className="content">
                    <div className="contentChild">
                        <BookCard books={books} query={query}/>
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

