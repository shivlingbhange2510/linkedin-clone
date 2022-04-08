import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
// import { Profile } from './Profile';
export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const { logout } = useAuth0();
  const a = {
    border: "1px solid #fff",
    cursor: "pointer",
    fontSize: "20px",
    padding: "8px 35px",
    margin: "40px",

  }
  return (
    <div>
      <section className="s1" id="home">
        <nav>
          <div className="nav">
            <div className="left">
              <div className="logo">
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="right">
              {!isAuthenticated ? <button style={a} onClick={() => loginWithRedirect()}>Login</button> :
                <>
                  <button onClick={() => { logout() }}>logout</button>
                </>
              }
            </div>
          </div>
        </nav>
      </section>
    </div>
  )
}