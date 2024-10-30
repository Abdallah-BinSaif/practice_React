import {useEffect, useState} from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))

    }, []);
    console.log(users)
    return (
        <div>
            users: {users.length}
        </div>
    );
};

export default Users;