import { useParams} from "react-router-dom";

const CoffeeCards = () => {
    const {category} = useParams()
    return (
        <div>
            coffeecards.jsx...........{category}
        </div>
    );
};

export default CoffeeCards;