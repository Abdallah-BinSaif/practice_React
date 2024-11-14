import {useLoaderData} from "react-router-dom";
import Coffee from "../components/Coffee.jsx";
import {useState} from "react";

const Coffees = () => {
    const fetchData = useLoaderData();
    const [coffees, setCoffees] = useState(fetchData);

    const handleSort = (sortBy) => {
        if(sortBy=== "popularity"){
            const sorted = [...coffees].sort((a,b)=> b.popularity - a.popularity)
            setCoffees(sorted)
        }else if(sortBy === "rating"){
            const sorted = [...coffees].sort((a,b)=> b.rating - a.rating)
            setCoffees(sorted)
        }
    }



    return (
        <>
            <div className={"flex justify-between items-center"}>
                <p className={"text-2xl"}>Sort Coffee's by Popularity & Rating-></p>
                <div>
                    <button onClick={() => handleSort("popularity")} className={"btn bg-green-300 mr-4"}>Sort by Popularity</button>
                    <button onClick={() => handleSort("rating")} className={"btn bg-green-300"}>Sort by Rating</button>
                </div>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6"}>
                {coffees.map(coffee => <Coffee key={coffee.id} coffee={coffee}></Coffee>)}
            </div>
        </>
    );
};

export default Coffees;