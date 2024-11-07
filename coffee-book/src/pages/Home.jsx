import Banner from "../components/Banner.jsx";
import Heading from "../components/Heading.jsx";
import {useLoaderData} from "react-router-dom";
import Categories from "../components/Categories.jsx";
import CoffeeCards from "../components/CoffeeCards.jsx";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            {/*  banner  */}
            <Banner></Banner>
            {/*  heading  */}
            <Heading
                heading={"Browse Coffees by Category"}
                parragraph={"Choose your desired coffee category to browse through specific coffees that fit in your taste."}
            ></Heading>
            {/*  coffees category  */}
            <Categories
                categories={categories}
            ></Categories>
            {/*  Dynamic coffees  */}
            <CoffeeCards></CoffeeCards>
            Home.jsx
        </div>
    );
};

export default Home;