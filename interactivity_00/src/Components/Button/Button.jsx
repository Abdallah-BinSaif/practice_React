
const Button = () => {
    function handleClick(){
        alert('You clicked me!');
    }
    return (
        <div>
            <button onClick={handleClick}>I do nothing</button>
        </div>
    );
};

export default Button;