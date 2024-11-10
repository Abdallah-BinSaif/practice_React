import {Link, useNavigate} from "react-router-dom";

const User = ({user}) => {

    const navigate = useNavigate();
    const {name, email, id} = user;
    const handleSeeDetails = () =>{
        navigate(`/user/${id}`)
    }
    return (
        <div className={"border-2 mb-2 ml-2 rounded-md p-2"}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`} >See Details</Link><br/>
            <button onClick={handleSeeDetails}>See Details</button>

        </div>
    );
};

export default User;