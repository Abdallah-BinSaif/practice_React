
import {useLoaderData, useNavigate} from "react-router-dom";

const PostDetail = () => {
    const {userId, title, body} = useLoaderData();
    const navigate = useNavigate();

    const handleBackToHome = () =>{
        navigate("/posts")
    }
    return (
        <div className={"bg-green-100 rounded-xl px-8 py-4 border-4 border-amber-100 my-4"}>
            <p>User Id: {userId}</p>
            <h3 className={"text-3xl"}>{title}</h3>
            <p>{body}</p>
            <button onClick={handleBackToHome} className={"bg-amber-100 px-2 py-2 rounded-md"}>Back to Posts</button>
        </div>
    );
};

export default PostDetail;