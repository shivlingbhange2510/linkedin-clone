import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
export const LogoutButton = () => {
  const a = {
    border : "1px solid #fff",
    padding : "4px 8px",
    color : "#fff",
    background : "none",
    fontSize : "18px",
    cursor : "pointer",
    display : "block !important"
  }
    const { logout} = useAuth0();
  return (
    <div>
        <button style={a} onClick={()=>{logout()}}>logout</button>
    </div>
  )
}
