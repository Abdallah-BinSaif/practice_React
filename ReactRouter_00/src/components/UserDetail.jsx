
import {Link, useLoaderData, useNavigate, useParams} from "react-router-dom";

const UserDetail = () => {

    const navigate = useNavigate();
    const user = useLoaderData();
    const {id, name, phone, website} = user;
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>user Id: {id}</h3>
            <h2>Name: {name}</h2>
            <p>Phone Number: {phone}</p>
            <p>Website: {website}</p>
            <Link to={"/"}>Home</Link>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetail;