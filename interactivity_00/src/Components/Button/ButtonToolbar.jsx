// Reading props in event handlers
import PropTypes from "prop-types"


const ButtonAlert = ({message, children}) => {
    return (
        <div>
            <button onClick={()=> alert(message)}>{children}</button>
        </div>
    );
};

const ButtonToolbar =()=>{
    return(
        <div>
            <ButtonAlert message={"Playing!"}>Play Movie</ButtonAlert>
            <ButtonAlert message={"Uploading!"}>Upload Image</ButtonAlert>
        </div>
    )
}


ButtonAlert.propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

export default ButtonToolbar;