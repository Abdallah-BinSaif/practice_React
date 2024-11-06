import {createBrowserRouter} from "react-router-dom";
// import App from "../App.jsx";
import MainLayout from "../main-layout/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Coffees from "../pages/Coffees.jsx"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div className={"text-center"}>Error happend</div>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path:"/coffees",
                element: <Coffees></Coffees>
            }
        ]
    },
])

export default Routes;