import {useLoaderData, useParams} from "react-router-dom";
import Nutrition from "../assets/nutrition.png"
import {addFavorite, getFavorite} from "../utils/localStorage.js";
import {useEffect, useState} from "react";

const CoffeeDetails = () => {

    const [coffee, setCoffee] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);
    const {id} = useParams();
    const fetchData = useLoaderData();

    useEffect(() => {
        if(fetchData.length){
            const singleCoffee = fetchData.find(coffee => coffee.id === parseInt(id));
            setCoffee(singleCoffee);
            const favorite = getFavorite();
            const isExist = favorite.find(item => item.id === singleCoffee.id)
            if(isExist){
                setIsFavorite(true)
            }else{
                setIsFavorite(false)
            }
        }
    }, [fetchData, id]);

    console.log(fetchData)
    console.log(coffee)
    console.log(id)

    const {
        name,
        image,
        ingredients,
        nutrition_info,
        description,
        rating,
        popularity,
        making_process
    } = coffee;

    const handleFavorite=(coffee)=>{
        addFavorite(coffee)
        setIsFavorite(true)
    }

    return (
        <div className={"space-y-6 my-8"}>
            <p className={"text-2xl font-light"}>{description}</p>
            <img
                className={"w-full rounded-lg"}
                src={image}
                alt={name}
            />
            <div className={"flex justify-between items-center"}>
                <div>
                    <h3 className={"text-3xl"}>{name}</h3>
                    <p className={"text-xl"}>Popularity: {popularity}</p>
                    <p className={"text-xl"}>Rating: {rating}</p>
                </div>
                <button disabled={isFavorite} onClick={() => handleFavorite(coffee)} className={"btn bg-green-400"}>Add Favorite</button>
            </div>
            <div>
                <h3 className={"text-3xl"}>Making Process</h3>
                <small className={"text-xl"}>{making_process}</small>
            </div>
            <div className={"flex"}>
                <div className={"flex-1"}>
                    {
                        ingredients && <div>
                            <h3 className={"text-3xl"}>Ingredients</h3>
                            <ul className={"text-xl ml-12"}>
                                {
                                    ingredients.map((item, idx) => <li className={"list-disc"} key={idx}>{item}</li>)
                                }
                            </ul>
                        </div>
                    }
                    {
                        nutrition_info && <div>
                            <h3 className={"text-3xl mt-4"}>Nutrition</h3>
                            <ul className={"text-xl ml-12"}>
                                {
                                    Object.keys(nutrition_info).map(n => (
                                        <li className={"list-disc"} key={n}>{n} : {nutrition_info[n]}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>
                <div className={"flex-1"}>
                    <img src={Nutrition}
                         alt={"nutrition"}/>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;