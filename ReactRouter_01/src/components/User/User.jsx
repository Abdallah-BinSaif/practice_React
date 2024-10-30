import PropTypes from "prop-types";
import {Link} from "react-router-dom";
const User = ({user}) => {
    const {name, email, phone, id}=user
    return (
        <div className={"border-4 py-4 bg-green-100 border-green-200 rounded-xl"}>
            <p>{name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link className={"text-green-800 underline"} to={`/user/${id}`}>User Detail</Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;