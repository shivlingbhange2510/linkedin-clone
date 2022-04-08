import Body from './Components/Body';
import Jobs from './Components/Jobs';
import Navbar from './Components/Navbar';
import Notification from './Components/Notification';
import "./style.css" 
import {Routes, Route} from "react-router-dom"
import "./App.css"
import Network from './Components/Network';
import Message from './Components/Message';
import Profile from './Components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import {LoginButton} from "./Auth0/LoginButton"

function App() {
  const { isAuthenticated}=useAuth0()
  // const {user, } = useAuth0()
  return (
    <>
        {!isAuthenticated? <> <LoginButton /></>
        :
        <>
        <Navbar />
      <Routes>
        <Route path="/" element= {<Body />} ></Route>
        <Route path="/profile" element= {<Profile />} ></Route>
        <Route path="/jobs" element= {<Jobs />} ></Route>
        <Route path="/network" element= {<Network />} ></Route>
        <Route path="/notification" element= {<Notification />} ></Route>
        <Route path="/message" element= {<Message />} ></Route>
      </Routes>
      </>
  }
  </>
    
    );
}

export default App;
// below is auth0 login code
// import logo from './logo.svg';
// import './App.css';
// import { LoginButton} from './Auth0/LoginButton';
// import { LogoutButton} from './Auth0/LogoutButton';
// import {Profile} from './Auth0/Profile';
// function App() {
//   return (
//     <div className="App">
//     <LoginButton/>
//     {/* <LogoutButton/> */}
//     {/* <Profile/> */}
//     </div>