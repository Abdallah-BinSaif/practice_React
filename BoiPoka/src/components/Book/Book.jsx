import {CiStar} from "react-icons/ci";
import {Link} from "react-router-dom";

const Book = ({book}) => {

    const {author,bookId, bookName, category, image, rating, tags} = book
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card p-4 border ">
                <figure className={"bg-gray-200 rounded-xl mb-4"}>
                    <img
                        className={"h-64 p-4"}
                        src={image}
                        alt="Shoes"/>
                </figure>
                <div className="">
                    <div className="text-xs">
                        <div className="badge text-green-500 mr-4 border rounded-full px-2 py-3 text-xs">{tags[0]}</div>
                        <div className="text-xs badge text-green-500 border rounded-full px-2 py-3">{tags[1]}</div>
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p className={"text-xs"}>By: {author}</p>
                    <div className={"border-b-2 border-dashed my-3"}></div>
                    <div className="card-actions justify-between">
                        <div className="">{category}</div>
                        <div className="flex items-center gap-1">
                            {rating}
                            <button><CiStar></CiStar></button>
                        </div>
                    </div>
                    <div className={"text-center"}>
                        <button className="badge badge-outline bg-green-600 text-white">Read</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;