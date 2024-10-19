import React, { useEffect, useState } from 'react'
import Friend from './components/Friend/Friend.jsx';

export default function Friends() {
    let [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setFriends(data))
    }, [])
  return (
    <div className='box1'>
        <h3>Friends: {friends.length}</h3>
        {
            friends.map(friend=><Friend friend={friend}></Friend>)
        }
    </div>
  )
}
