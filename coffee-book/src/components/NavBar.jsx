import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={"flex justify-between my-4 px-4 max-w-screen-xl mx-auto"}>
            <h2 className={"text-2xl font-semibold"}>COFFEE_BOOK</h2>
            <ul className={"flex text-lg font-semibold gap-12"}>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/coffees"}>Coffees</NavLink></li>
                <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
            </ul>
        </div>
    );
};

export default NavBar;