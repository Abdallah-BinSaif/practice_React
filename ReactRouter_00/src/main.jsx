import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import UserDetail from "./components/UserDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users/"),
        element: <Users></Users>,
      },
      {
        path: "/Posts",
        element:<div>Posts</div>,
      },
      {
        path: "/contact",
        element:<div>Contact Us</div>
      },
      {
        path: "/user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetail></UserDetail>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
