import Body from './Components/Body';
import Jobs from './Components/Jobs';
import Navbar from './Components/Navbar';
import "./style.css" 
import {Routes, Route} from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element= {<Body />} ></Route>
      <Route path="/jobs" element= {<Jobs />} ></Route>
    </Routes>
    </>
  );
}

export default App;
