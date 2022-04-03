import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
export const LogoutButton = () => {
    const { logout} = useAuth0();
  return (
    <div>
        <h1>LogoutButton</h1>
        <button onClick={()=>{logout()}}>logout</button>
    </div>
  )
}
