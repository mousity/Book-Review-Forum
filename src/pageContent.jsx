import { useState, useEffect } from "react";
import BookCard from "./bookCard";
import NewBook from "./newBook";

export default function PageContent ({ apiURL, titleQuery, authorQuery }) {

    
    const [bookList, setBookList] = useState([]);

    useEffect(() => {

        let ignore = false;

        async function fetchBooks() {
            const response = await fetch(apiURL);
            const books = await response.json();
            if(!ignore){
                setBookList(books);
            }
        }

        fetchBooks();

        return () => {
            ignore = true;
          }
        
    }, [])

    
    return (    
        <div className="pageCont">
            <div className="content">
                <div className="contentChild">
                    <BookCard bookList={bookList} titleQuery={titleQuery} authorQuery={authorQuery} apiURL={apiURL}/>
                        <div className="card">
                            <NewBook bookList={bookList} setBookList={setBookList} apiURL={apiURL}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}