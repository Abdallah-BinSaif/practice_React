import React from 'react'

export default function User({user}) {
    console.log(user)
    const {name} = user
    let fullname = `${name.title} ${name.first} ${name.last}`
  return (
    <div className='innerBox'>User Name: {fullname}</div>
  )
}
