import {useLoaderData} from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div>
            <p>{user.name}</p>
        </div>
    );
};

export default UserDetails;