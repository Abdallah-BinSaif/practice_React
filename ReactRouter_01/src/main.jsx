import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css"
// import App from './App.jsx';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./components/Home/Home.jsx";
import Users from "./components/Users/Users.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Posts from "./Posts/Posts.jsx";
import PostDetail from "./components/PostDetail/PostDetail.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/about",
                element: <div>I am from about</div>

            },
            {
                path: "/contact",
                element: <div>Contact with us</div>
            },
            {
                path: "/users",
                loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
                element: <Users></Users>
            },
            {
                path: "/user/:userId",
                loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
                element: <UserDetails></UserDetails>
            },
            {
                path: "/posts",
                loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
                element: <Posts></Posts>
            },
            {
                path: "/post/:postId",
                loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
                element: <PostDetail></PostDetail>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
