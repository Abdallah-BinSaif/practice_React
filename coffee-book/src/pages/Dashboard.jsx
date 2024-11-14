import Coffee from "../components/Coffee.jsx";
import {deleteFavorite, getFavorite} from "../utils/localStorage.js";
import Heading from "../components/Heading.jsx";
import {useEffect, useState} from "react";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const favorites = getFavorite();
        setCoffees(favorites)

    }, []);

    const handleRemove = (id) =>{
        deleteFavorite(id)
        const favorites = getFavorite();
        setCoffees(favorites)
    }


    return (
        <>
            <Heading heading={"Welcome to Dashboard"} parragraph={"Manage coffees that you have previously added as favorite. You can view or remove them from here."}></Heading>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6"}>
                {coffees.map(coffee => <Coffee key={coffee.id} handleRemove={handleRemove} coffee={coffee}></Coffee>)}
            </div>

        </>
    );
};

export default Dashboard;