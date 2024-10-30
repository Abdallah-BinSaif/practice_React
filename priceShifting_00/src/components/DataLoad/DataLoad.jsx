import {useEffect, useState} from "react";
import axios from "axios";

const DataLoad = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(data => setUsers(data.data))
    }, []);
    console.log(users)

    return (
        <div>
            DAtaLOad
        </div>
    );
};

export default DataLoad;