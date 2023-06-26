import { useState } from "react";

export default function BookCard ({books, query}) {
    
    const list = [];
    console.log(query);

  books.forEach((item, index) => {

    if(item.title.toLowerCase().includes(query.toLowerCase())){
      list.push(
        <div className="card" key={index}>
          <img className="cardImage" src={item.image.src} alt={item.image.alt}/>
          <div className="cardTitle">{item.title}</div>
          <div className="cardDesc">{item.description}</div>
          <div className="options">
              <button className="favorite">Make Favorite?</button>
              <button className="showReviews">Show Reviews</button>
          </div>
        </div>
      );
  }});



  return list;
}
