import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={"px-2"}>
        {/*    NavBar   */}
            <NavBar></NavBar>
        {/*    outlet   */}
            <div className="min-h-[calc(100vh-280px)] max-w-screen-lg mx-auto">
                <Outlet />
            </div>

        {/*    Footer   */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;