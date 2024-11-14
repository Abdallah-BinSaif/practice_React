const SimpleForm = () => {

    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type={"text"}/><br/>
                <input type={"email"}/><br/>
                <input type={"password"}/><br/>
                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
    );
};

export default SimpleForm;