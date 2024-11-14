import {createBrowserRouter} from "react-router-dom";
// import App from "../App.jsx";
import MainLayout from "../main-layout/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Coffees from "../pages/Coffees.jsx"
import CoffeeCards from "../components/CoffeeCards.jsx";
import CoffeDetails from "../pages/CoffeDetails.jsx";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div className={"text-center"}>Error happend</div>,
        children: [
            {
                path:"/",
                element: <Home></Home>,
                loader: ()=>fetch("../categories.json"),
                children: [
                    {
                        path: "/",
                        element: <CoffeeCards></CoffeeCards>,
                        loader: () => fetch("../coffees.json")
                    },
                    {
                        path: "/category/:category",
                        element: <CoffeeCards></CoffeeCards>,
                        loader: () => fetch("../coffees.json")
                    }
                ],
            },
            {
                path:"/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path:"/coffees",
                loader: () => fetch("../coffees.json"),
                element: <Coffees></Coffees>
            },
            {
                path: "/coffee/:id",
                loader: () => fetch("../coffees.json"),
                element: <CoffeDetails></CoffeDetails>
            }
        ]
    },

])

export default Routes;