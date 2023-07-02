import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, redirect} from "react-router-dom"
import BookCard from './bookCard.jsx'
import PageContent from './pageContent.jsx'
import NavBar from './navBar.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    
    children: [
      {
        path: "/",
        element: <PageContent />
      },
      {
        path: "/books/:id",
        element: <PageContent />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
