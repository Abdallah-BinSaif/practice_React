import React from 'react'

export default function Friend({friend}) {
    const {name, email} = friend
  return (
    <div className='innerBox'>
        <h4>Name: {name}</h4>
        <p>Email: {email}</p>
    </div>
  )
}