import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
    const {user, } = useAuth0()
    // console.log(user)
  const a = {
    color : "#fff"
  }
  return (
    <div>
        <h1>Profile</h1>
        <img src={user?.picture} height='100px' style={{borderRadius:'50%'}} with='100px' alt="" />
        <p style={a}>name: {user.name} </p>
        <p style={a}> email: {user?.email} </p>
        {/* <p>{JSON.stringify(user, null, 2)}</p> */}
    </div>
  )
}
