import {useLoaderData, useParams} from "react-router-dom";
import Coffee from "./Coffee.jsx";
import {useEffect, useState} from "react";

const CoffeeCards = () => {

    const [coffees, setCoffees] = useState([]);

    const fetchData = useLoaderData();

    const {category} = useParams()

    useEffect(() => {
        if(category){
            const sortedCoffees = [...fetchData].filter(item => item.category === category)
            setCoffees(sortedCoffees);
        }else{
            setCoffees(fetchData);
        }
    }, [category, fetchData]);

    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6"}>
            {coffees.map(coffee=> <Coffee key={coffee.id} coffee={coffee}></Coffee>)}
        </div>
    );
};

export default CoffeeCards;