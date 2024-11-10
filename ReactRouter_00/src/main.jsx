import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home.jsx";
import Users from "./components/Users.jsx";
import Posts from "./components/Posts.jsx";
import ContactUs from "./components/ContactUs.jsx";
import UserDetail from "./components/UserDetail.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/users",
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path:"/posts",
        element: <Posts></Posts>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetail></UserDetail>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
