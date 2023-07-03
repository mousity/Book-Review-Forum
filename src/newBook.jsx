import React, { useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";

export default function NewBook({ bookList, apiURL }) {

      const data = useActionData();
//     const [image, setImage] = useState('');
//     const [title, setTitle] = useState('');
//     const [author, setAuthor] = useState('');
//     const [description, setDescription] = useState('');

//     const handleImage = (event) => {
//         setImage(event.target.value);
//       };
    
//     const handleTitle = (event) => {
//         setTitle(event.target.value);
//       };

//     const handleAuthor = (event) => {
//         setAuthor(event.target.value);
//       };
    
//     const handleDescription = (event) => {
//         setDescription(event.target.value);
//       };



//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const preparedBook = {
//           image: { src: image, alt: "str"},
//           title: title,
//           author: author,
//           description: description,
//         }

//         const response = await fetch(apiURL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(preparedBook)
        
//       })

//     const newBook = await response.json();
//     // setBookList([...bookList, newBook]);
// }

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

  debugger;
  console.log(submission);

  return redirect('/');
}