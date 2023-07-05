import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

export default function BookCard ({bookList, titleQuery, authorQuery, apiURL}) {
  // console.log(bookList, '')
  const list = [];

  console.log(apiURL);
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    deleteBook(e, id);
  }

  const deleteBook = async (e, id) => {
    await fetch(`${apiURL}/${id}`, {
      method: 'DELETE'
    });
    window.location.reload(true);
  }

  bookList.forEach((item, index) => {

    console.log(item.title);
    if(item.title.toLowerCase().includes(titleQuery.toLowerCase()) && item.author.toLowerCase().includes(authorQuery.toLowerCase())){
      list.push(
        <Link to={`/books/${item.id}`} className="card" key={index}>
          <img className="cardImage" src={item.image.src} alt={item.image.alt}/>
          <div className="cardTitle">{item.title}</div>
          <div className="author">By {item.author}</div>
          <div className="cardDesc">{item.description}</div>
          <div className="options">
              <button className="favorite">Favorite? <AiOutlineStar/></button>
              <button className="showReviews">Show Reviews</button>
              <button className="delete" onClick={(e) => handleDelete(e, item.id)}>Delete</button>
          </div>
        </Link>
      );
  }});



  return list;
}
