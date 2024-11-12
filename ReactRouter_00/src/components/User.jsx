import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name,email, website} = user
    return (
        <Link className={"cursor-pointer"} to={`/user/${id}`}>
            <div className={"border-2 border-green-200 rounded-xl p-2"}>
                <h3>{name}</h3>
                <p>Email: {email}</p>
                <small>{website}</small>
            </div>
        </Link>
    );
};

export default User;