import Hero from "../components/Hero/Hero.jsx";
import {useEffect, useState} from "react";
import Book from "../components/Book/Book.jsx"
const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("booksData.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    return (
        <div>
            {/*    hero section */}
            <Hero></Hero>
        {/*    Books Section*/}
            <h3 className={"text-center mt-16 my-6"}>Books</h3>
            <div className={"grid md:grid-cols-3 gap-4 mb-8"}>
                {
                    books.map((book, idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;