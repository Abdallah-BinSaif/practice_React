import {useLoaderData} from "react-router-dom";
import User from "../User/User.jsx";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <p>Our Users: {users.length}</p>
            <div className={"grid grid-cols-3 gap-3"}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;