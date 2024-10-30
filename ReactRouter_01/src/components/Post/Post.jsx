import PropTypes from "prop-types";
import {Link} from "react-router-dom";
const Post = ({post}) => {
    return (
        <div className={"bg-amber-100 border-4 border-amber-200 rounded-xl"}>
            <p>{post.id}</p>
            <p>Title: {post.title}</p>
            <Link className={"btn text-amber-600 underline"} to={`/post/${post.id}`}>Post Detail</Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;