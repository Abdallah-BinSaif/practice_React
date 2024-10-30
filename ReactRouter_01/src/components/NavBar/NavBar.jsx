import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={"flex items-center mb-8"}>
            <p className={"grow text-left font-bold text-3xl"}>LoGo</p>
            <ul className={"flex gap-8 underline"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/users"}>Users</Link>
                <Link to={"/posts"}>Posts</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/Contact"}>Contact Us</Link>
            </ul>
        </div>
    );
};

export default NavBar;