// passing event handlers as props
import PropTypes from "prop-types"

function Button({onClick, children}){
    return(
        <button onClick={onClick}>{children}</button>
    );
};

function PlayButton({movieName}){
    function handlePlayClick(){
        alert(`Playing ${movieName}`)
    };

    return (
        <Button onClick={handlePlayClick}>Play {movieName}</Button>
    )
};





const ButtonToolbar2 = () => {
    return (
        <div>
            <PlayButton movieName={"Kiki's Delivery Service"}></PlayButton>
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
}
PlayButton.propTypes = {
    movieName: PropTypes.string.isRequired,
}

export default ButtonToolbar2;