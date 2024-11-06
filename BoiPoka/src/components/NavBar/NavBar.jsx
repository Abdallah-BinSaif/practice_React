import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={"flex justify-between items-center my-8"}>
            <div>
                Book Vibe
            </div>
            <ul className={"flex gap-12"}>
                <NavLink to={"/"} className={"px-2 py-1 rounded-md hover:text-green-500 hover:border hover:border-green-500 duration-200"}>Home</NavLink>
                <NavLink to={"/listed"} className={"px-2 py-1 rounded-md hover:text-green-500 hover:border hover:border-green-500 duration-200"}>Listed Books</NavLink>
                <NavLink to={"/read"} className={"px-2 py-1 rounded-md hover:text-green-500 hover:border hover:border-green-500 duration-200"}>Pages to Read</NavLink>
            </ul>
            <div>
                <button className={"btn bg-green-500 text-white"}>Sing In</button>
                <button className={"btn bg-blue-400 ml-4 text-white"}>Sing Up</button>
            </div>
        </div>
    );
};

export default NavBar;