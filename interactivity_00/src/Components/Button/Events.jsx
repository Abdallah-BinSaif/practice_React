
const Button = ({onSmash, children})=>{
    return(
        <button onClick={onSmash}>{children}</button>
    );
};


const Events = () => {
    return (
        <div>
            <Button onSmash={()=> alert("Playing!")}>Play Movie</Button>
            <Button onSmash={()=> alert("Uploading!")}>Upload Image</Button>
        </div>
    );
};

export default Events;