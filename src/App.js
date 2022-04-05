import Body from './Components/Body';
import Jobs from './Components/Jobs';
import Navbar from './Components/Navbar';
import Notification from './Components/Notification';
import "./style.css" 
import {Routes, Route} from "react-router-dom"
import "./App.css"
import Network from './Components/Network';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element= {<Body />} ></Route>
      <Route path="/jobs" element= {<Jobs />} ></Route>
      <Route path="/network" element= {<Network />} ></Route>
      <Route path="/notification" element= {<Notification />} ></Route>
    </Routes>
    </>
  );
}

export default App;
