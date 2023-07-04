import React, { useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";

export default function NewBook({ bookList, apiURL }) {

      const data = useActionData();
      
    return (
    <Form method="post" action="/" className="newBookForm">
        <div className="newBook">
            <h2 id="newBookHead">Add New Book?</h2>
            <img src="src\assets\smallBook.png"/>
        </div>
      <div>
        <label htmlFor="image">Image URL</label>
        <input name="image" id="image" type="URL" 
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input name="title" id="title" type="title"
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input name="author" id="author" type="author"
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input name="description" id="description" type="description" 
        />
      </div>
      <button type="submit" >Submit</button>
    </Form>
    )
}

export const addNewBook = async ({ request }) => {
  console.log(request);
  console.log("im here");
  const data = await request.formData();
  const submission = {
    image: {
      src: data.get("image"),
      alr: "str",
    },
    title: data.get("title"),
    author: data.get("author"),
    description: data.get("description")
  }

  const book = JSON.stringify(submission);

  fetch('http://localhost:3000/books', {
  method: 'POST',
  body: book,
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => response.json())

return redirect('/');
}