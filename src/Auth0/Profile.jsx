import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
    const {user, setUser} = useAuth0()
  return (
    <div>
        <h1>Profile</h1>
        <img src={user?.picture} height='100px' style={{borderRadius:'50%'}} with='100px' alt="" />
        <p>name: {user.name} </p>
        <p> email: {user?.email} </p>
        {/* <p>{JSON.stringify(user, null, 2)}</p> */}
    </div>
  )
}
