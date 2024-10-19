import { useEffect, useState } from "react"
import User from "./components/User/User.jsx"

export default function Users(){

    let [users, setUsers] = useState([])

    useEffect(()=>{
        fetch("https://api.freeapi.app/api/v1/public/randomusers")
        .then(res=>res.json())
        .then(data=>setUsers(data.data.data))
    },[])

    return (
        <div className="box1">
            <h2>Users: {users.length}</h2>
            <div className="flex">
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    )
}