import logo from './logo.svg';
import './App.css';
import { LoginButton} from './Auth0/LoginButton';
import { LogoutButton} from './Auth0/LogoutButton';
import {Profile} from './Auth0/Profile';
function App() {
  return (
    <div className="App">
    <LoginButton/>
    {/* <LogoutButton/> */}
    {/* <Profile/> */}
    </div>
  );
}

export default App;
