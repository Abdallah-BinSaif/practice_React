import {createBrowserRouter} from "react-router-dom";
// import Home from "../pages/Home.jsx";
import MainLayouts from "../layouts/MainLayouts.jsx";
import Home from "../pages/Home.jsx";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/listed",
                element: <div>Listed</div>,
            },
            {
                path: "/read",
                element: <div>Read</div>
            }
        ]
    }
]);

export default route;