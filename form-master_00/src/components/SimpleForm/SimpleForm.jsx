
const SimpleForm = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.mail.value);
        console.log(e.target.number.value);
        console.log("form submitted....")
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    type={"text"}
                    name={"name"}
                /><br/>
                <input type={"email"} name={"mail"}/><br/>
                <input type={"number"} name={"number"}/>
                <br/>
                <input
                    type={"submit"}
                    value={"Submit"}
                    name={"submit"}
                />
            </form>
        </div>
    );
};

export default SimpleForm;