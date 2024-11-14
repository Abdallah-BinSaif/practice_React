import {useLocation, useNavigate} from "react-router-dom";
import {MdDeleteForever} from "react-icons/md";

const Coffee = ({coffee,handleRemove}) => {
const navigate = useNavigate();
const location = useLocation();

    const {name, id, image,category, origin, rating, type, popularity} = coffee;
    const handleCoffeeDitail = () => {
        navigate(`/coffee/${id}`)
    }
    return (
        <div className={"relative"}>
            <div onClick={handleCoffeeDitail} className="cursor-pointer card card-compact bg-base-100  shadow-xl">
                <figure>
                    <img
                        className={"h-56 w-full object-cover"}
                        src={image}
                        alt=""/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <small>
                        <p>Category: {category}</p>
                        <p>Type: {type}</p>
                        <p>Origin: {origin}</p>
                        <p>Rating: {rating}</p>
                        <p>Popular: {popularity}</p>
                    </small>

                </div>

            </div>
            {
                location.pathname ==="/dashboard" ?
                    <button onClick={()=> handleRemove(id)} className={"absolute -top-5 -right-5 rounded-full text-5xl bg-warning"}>
                        <MdDeleteForever className={"p-2"}></MdDeleteForever>
                    </button> : ""
            }

        </div>

    );
};

export default Coffee;