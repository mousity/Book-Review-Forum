import React, { Fragment } from "react";
import books from "./pageData";
import BookCard from "./bookCard";

export default function NavBar () {

    

    return (
        <div className="entirePage">
            <span className="heading">
                <img className="logo" src="src\assets\Logo.jpg" alt="Book Cat" ></img>
                <h1 className="topTitle">Path of Pages Forum</h1>
            </span>
            <div className="page">
                <div className="navbar">
                    <div className="searchBar">SearchBarTemp</div>
                    <button className="navButton">Home</button>
                    <button className="navButton">About Us</button>
                    <button className="navButton">Favorites</button>
                </div>

                <div className="content">
                    <div className="contentChild">
                        <BookCard books={books}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

