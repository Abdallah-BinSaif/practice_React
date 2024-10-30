import { Twirl as Hamburger } from 'hamburger-react';
// import {IoCloseSharp, IoMenu} from "react-icons/io5";
import {useState} from "react";
import MenuItem from "../MenuItem/MenuItem.jsx";


const NavBar = () => {

    const routes = [
        {
            id: 1,
            path: "/",
            name: "Home"
        },
        {
            id: 2,
            path: "/players",
            name: "Players"
        },
        {
            id: 3,
            path: "/teams",
            name: "Teams"
        },
        {
            id: 4,
            path: "/auction",
            name: "Auction"
        },
        {
            id: 5,
            path: "/about",
            name: "About Us"
        }
    ];
    const [menubar, setMenubar] = useState(false)


    return (
        <div className="mb-12">
            <div className="bg-green-300 p-2 md:hidden" onClick={()=>setMenubar(!menubar)}>
                <Hamburger
                    size={20}
                    direction={"left"}
                    duration={1}
                    distance={"sm"}
                ></Hamburger>

                {/*{*/}
                {/*    menubar? <IoCloseSharp></IoCloseSharp>:<IoMenu></IoMenu>*/}
                {/*}*/}



            </div>
            <ul className={`flex rounded-b-xl z-10 absolute md:static bg-green-300 ${menubar? "-top-6":"top-14"} duration-1000`}>
                {
                    routes.map((route)=> <MenuItem key={route.id} route={route}></MenuItem>)
                }
            </ul>

        </div>
    );
};

export default NavBar;