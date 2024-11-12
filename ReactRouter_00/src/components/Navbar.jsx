import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"flex justify-between p-8"}>
            <p className={"font-bold text-xl"}>Logo</p>
            <ul className={"flex gap-8 items-center"}>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/users"}>Users</NavLink></li>
                <li><NavLink to={"/posts"}>Posts</NavLink></li>
                <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;