import useInputField from "../../Hooks/useInputField.js";


const HookForm = () => {

    const [name, handleName] = useInputField("Your Name")
    const [email, handleEmail] = useInputField("example@gmail.com")
    const [password, handlePassword] = useInputField("")
    const handleForm = e => {
        e.preventDefault();
        console.log(name, email, password)
    }
    return (
        <div>
            <p>Hoooooks</p>
            <form onSubmit={handleForm}>
                <input
                    value={name}
                    onChange={handleName}
                    type={"text"}
                    name={"name"}
                /><br/>
                <input
                    value={email}
                    onChange={handleEmail}
                    type={"email"}
                    name={"email"}
                /><br/>
                <input
                    value={password}
                    onChange={handlePassword}
                    type={"password"}
                    name={"password"}
                /><br/>
                <input
                    type={"submit"}
                    value={"Submit"}
                />
            </form>
        </div>
    );
};

export default HookForm;