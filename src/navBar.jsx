import React, { Fragment, onChange, useState } from "react";
import books from "./pageData";
import BookCard from "./bookCard";
import NewBook from "./newBook";
import About from "./UI/AboutModal";

export default function NavBar () {

    const [titleQuery, setTitleQuery] = useState("");
    const [authorQuery, setAuthorQuery] = useState("");
    const [bookList, setBookList] = useState(books);
    const [isAboutActive, setIsAboutActive] = useState(false);

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
                <a href="https://github.com/mousity" className="link">GitHub</a>
                <a href="https://www.linkedin.com/in/samrmouna/" className="link">LinkedIn</a>
            </div>

            <About isVisible={isAboutActive} hideModal={hideModal}>
            </About>

        </div>
    )
}

