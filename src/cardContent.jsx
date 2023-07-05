import { useState, useEffect } from "react";
import { Link, redirect, useActionData, useLoaderData, Navigate } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function CardContent({item, apiURL}) {
    console.log(apiURL);

    const [fav, setFav] = useState(false);
    
  const handleAction = (e, id, num) => {
    console.log(e.target);
    console.log("im here");
    e.stopPropagation();
    e.preventDefault();
    (num === 1) ? makeFavorite(id) : deleteBook(id);
  }

  const deleteBook = async (id) => {
    await fetch(`${apiURL}/${id}`, {
      method: 'DELETE'
    });
    window.location.reload(true);
  }

  const makeFavorite = async (id) => {
    setFav(!fav);
    console.log(fav);
    await fetch(`${apiURL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorite: fav
      })
    });
  }
    return (
        <Link to={`/books/${item.id}`} className="card">
          <img className="cardImage" src={item.image.src} alt={item.image.alt}/>
          <div className="cardTitle">{item.title}</div>
          <div className="author">By {item.author}</div>
          <div className="cardDesc">{item.description}</div>
          <div className="options">
              <button className="favorite" onClick={(e) => handleAction(e, item.id, 1)}>Favorite? 
              {!fav ? <AiFillStar/> : <AiOutlineStar/>}
              </button>
              <button className="showReviews">Show Reviews</button>
              <button className="delete" onClick={(e) => handleAction(e, item.id, 2)}>Delete</button>
          </div>
        </Link>
    )
}