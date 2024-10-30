import {useLoaderData} from "react-router-dom";
import Post from "../components/Post/Post.jsx";

const Posts = () => {
const posts = useLoaderData();
    return (
        <div>
            <p>Posts: {posts.length}</p>
            <div className={"grid grid-cols-3 gap-4"}>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;