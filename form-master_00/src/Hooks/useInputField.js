import {useState} from "react";

const useInputField = (defaultValue="") => {
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        setValue(e.target.value);
    }
    return [value, onChange]
}

export default useInputField;