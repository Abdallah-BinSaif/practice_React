
import Links from "./Links.jsx";
import {useState} from "react";
import {MdClose, MdMenu} from "react-icons/md";

const Navbar = () => {

    const [menu, setMenu] = useState(false);



    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Our Services" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/faq", name: "FAQ" }
    ];


    return (
        <div>
            <div className={"text-2xl md:hidden"} onClick={() => setMenu(!menu)}>
                {
                    menu ? <MdClose></MdClose> : <MdMenu></MdMenu>
                }
            </div>
            {
                menu ? <ul className={"md:flex my-2 duration-1000"}>
                    {
                        routes.map(route => <Links key={route.id} route={route}></Links>)
                    }
                </ul> : ""
            }

        </div>
    );
};

export default Navbar;