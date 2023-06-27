import React, { useState } from "react";

export default function NewBook({ bookList, setBookList }) {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const newBook = [...bookList];

    const handleImage = (event) => {
        setImage(event.target.value);
      };
    
    const handleTitle = (event) => {
        setTitle(event.target.value);
      };

    const handleAuthor = (event) => {
        setAuthor(event.target.value);
      };
    
    const handleDescription = (event) => {
        setDescription(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("im in here");
            newBook.push({
                image: {
                    src: image,
                    alt: "Custom Book"
                },
                title: title,
                author: author,
                description: description,
            })

        setBookList(newBook);
        debugger;
      };

    return (
    <form onSubmit={handleSubmit} className="newBookForm">
        <div className="newBook">
            <h2 id="newBookHead">Add New Book?</h2>
            <img src="src\assets\smallBook.png"/>
        </div>
      <div>
        <label htmlFor="image">Image URL</label>
        <input id="image" type="URL" value={image} onChange={handleImage}
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" type="title" value={title} onChange={handleTitle}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input id="author" type="author" value={author} onChange={handleAuthor}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input id="description" type="description" value={description} onChange={handleDescription}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    )
}