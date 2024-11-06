import NavBar from "../components/NavBar/NavBar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div className={"max-w-screen-xl m-auto px-4"}>
        {/*    NavBar      */}
            <NavBar></NavBar>

        {/*    Dynamic      */}
            <Outlet></Outlet>
        {/*    Footer      */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;