import {useState} from "react";

const StateForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
    }
    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    onChange={handleName}
                    type={"text"}
                    name={"name"}
                /> <br/>
                <input
                    onChange={handleEmail}
                    type={"email"}
                    name={"email"}
                /><br/>
                <input
                    onChange={handlePassword}
                    type={"password"}
                    name={"password"}
                /><br/>
                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
    );
};

export default StateForm;