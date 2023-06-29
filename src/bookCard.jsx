import { useState } from "react";

export default function BookCard ({bookList, titleQuery, authorQuery, apiURL}) {
  // console.log(bookList, '')
  const list = [];

  console.log(apiURL);
  const handleDelete = async (id) => {
    await fetch(`${apiURL}/${id}`, {
      method: 'DELETE'
    });
    window.location.reload(true);
  }

  bookList.forEach((item, index) => {

    if(!item.title){
      debugger;
    }
    console.log(item.title);
    if(item.title.toLowerCase().includes(titleQuery.toLowerCase()) && item.author.toLowerCase().includes(authorQuery.toLowerCase())){
      list.push(
        <div className="card" key={index}>
          <img className="cardImage" src={item.image.src} alt={item.image.alt}/>
          <div className="cardTitle">{item.title}</div>
          <div className="author">By {item.author}</div>
          <div className="cardDesc">{item.description}</div>
          <div className="options">
              <button className="favorite">Make Favorite?</button>
              <button className="showReviews">Show Reviews</button>
              <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      );
  }});



  return list;
}
