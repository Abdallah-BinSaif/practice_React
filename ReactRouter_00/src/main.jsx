import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Root, { loader as rootLoader } from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: rootLoader,
    children:[
      {
        path: "contacts/:contactId",
        element:<Contact></Contact>
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
