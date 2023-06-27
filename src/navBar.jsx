import React, { Fragment, onChange, useState } from "react";
import books from "./pageData";
import BookCard from "./bookCard";
import NewBook from "./newBook";

export default function NavBar () {

    const [titleQuery, setTitleQuery] = useState("");
    const [authorQuery, setAuthorQuery] = useState("");
    const [bookList, setBookList] = useState(books);
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
                        <BookCard bookList={bookList} titleQuery={titleQuery} authorQuery={authorQuery}/>
                        <div className="card">
                            <NewBook bookList={bookList} setBookList={setBookList}/>
                        </div>
                        
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

