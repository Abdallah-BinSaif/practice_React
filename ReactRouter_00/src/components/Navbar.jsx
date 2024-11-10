
import { NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className={"flex gap-8"}>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/users"}>Users</NavLink></li>
                <li><NavLink to={"/posts"}>Posts</NavLink></li>
                <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;