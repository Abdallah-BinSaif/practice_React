import {Outlet} from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h2>I am from React Router</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;