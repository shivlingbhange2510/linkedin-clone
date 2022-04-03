import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import {Profile} from './Profile';
export const LoginButton = () => {
  const {loginWithRedirect, isAuthenticated}=useAuth0()
  const { logout} = useAuth0();
  return (
    <div>
   {!isAuthenticated? <button onClick={()=>loginWithRedirect()}>Login</button>:
   <>
   <Profile/>
    <button onClick={()=>{logout()}}>logout</button>
    </>
}
    </div>
  )
}