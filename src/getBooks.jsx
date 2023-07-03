import React, { useState, useEffect } from "react";

export default function GetBooks() {
    console.log("i got here");
    let book = [];
    console.log("i got here");

    console.log("i got here");
        async function fetchBooks() {
            const response = await fetch("http://localhost:3000/books");
            const books = await response.json();
            
            book = books.map(e => e);
            console.log(book);
    }

        fetchBooks();

    return book;
}