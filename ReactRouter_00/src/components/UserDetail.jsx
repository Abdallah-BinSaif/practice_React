import {useLoaderData, useLocation, useNavigate} from "react-router-dom";

const UserDetail = () => {
    const location = useLocation();
    const user = useLoaderData();
    const navigate = useNavigate();
    console.log(location)
    const handleGoHome = () => {
        navigate("/")
    }
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            UserDetail.jsx
            <button onClick={handleGoHome}>Go Home</button>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetail;