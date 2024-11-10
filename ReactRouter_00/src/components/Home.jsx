import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;