import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, redirect} from "react-router-dom"
import BookCard from './bookCard.jsx'
import PageContent from './pageContent.jsx'
import NavBar from './navBar.jsx'
import DetailedPage from './detailedPage.jsx'
import { useLoaderData } from 'react-router-dom'
import load from './loadBooks.jsx'
import { addNewBook } from './newBook.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: load,
    children: [
      {
        path: "/",
        loader: load,
        action: addNewBook,
        element: <PageContent />
      },
      {
        path: "/books/:id",
        loader: load,
        element: <DetailedPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
