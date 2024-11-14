import Banner from "../components/Banner.jsx";
import Heading from "../components/Heading.jsx";
import {Outlet, useLoaderData} from "react-router-dom";
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
            <Outlet></Outlet>
            Home.jsx
        </div>
    );
};

export default Home;