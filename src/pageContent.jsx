import { useState, useEffect } from "react";
import BookCard from "./bookCard";
import NewBook from "./newBook";
import { useLoaderData, useOutletContext } from "react-router-dom"

export default function PageContent () {

    
    // const [bookList, setBookList] = useState([]);
    const { apiURL, titleQuery, authorQuery } = useOutletContext();
    // useEffect(() => {

    //     let ignore = false;

    //     async function fetchBooks() {
    //         const response = await fetch(apiURL);
    //         const books = await response.json();
    //         if(!ignore){
    //             setBookList(books);
    //         }
    //     }

    //     fetchBooks();

    //     return () => {
    //         ignore = true;
    //       }
        
    // }, [])

    
    const bookList = useLoaderData();
    console.log(bookList);

    return (    
        <div className="pageCont">
            <div className="content">
                <div className="contentChild">
                    <BookCard bookList={bookList} titleQuery={titleQuery} authorQuery={authorQuery} apiURL={apiURL}/>
                        <div className="card">
                            <NewBook bookList={bookList} apiURL={apiURL}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}