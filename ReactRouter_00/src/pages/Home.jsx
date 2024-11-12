import Navbar from "../components/Navbar.jsx";
import {Outlet, useNavigation} from "react-router-dom";

const Home = () => {

    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ? "Loading........." : <Outlet></Outlet>
            }

        </div>
    );
};

export default Home;